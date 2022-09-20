<template>
    <v-container fluid>
        <v-row>
            <v-spacer></v-spacer>
            <v-col>
            <v-card width="800" class="pa-10" color="rgb(255, 255, 255, 0.3)">
            <div class="text-h5 font-weight-bold text-white">Current Score: <span class="text-green-lighten-3"> {{correctAnswers}}</span></div>
            <div class="text-subtitle-1 text-white">Question {{index+1}} out of {{questions.length}}</div>

        <h1 v-html="loading ? 'Preparing quiz...' : currentQuestion.question" class="text-white mt-3"></h1>
      <div class="text-body-2 font-weight-black text-left ml-16 mt-5 text-white">Choices:</div>
      <form v-if="currentQuestion">
        <button
          v-for="answer in currentQuestion.answers"
          :index="currentQuestion.key"
          :key="answer"
          v-html="answer"
          @click.prevent="handleClick"
        ></button>
      </form>
        </v-card>
        <v-btn
        height="50"
        class="bg-green text-white font-weight-bold text-h6 mt-2"
        to="/results"
        >
        <v-icon>mdi-history</v-icon>
        View Quiz History
        </v-btn>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
</v-container>
  </template>
  
  <script>
import axios from 'axios';
import { useStore} from "vuex";
import { useRouter } from "vue-router";
import {computed} from "vue";
import { auth } from '../firebase'
import DataService from '../services/DataService';
  export default {
    setup() {
    const admin = DataService.isAdmin()
    const store = useStore()
    const router = useRouter()
    auth.onAuthStateChanged(user => {
      store.dispatch("fetchUser", user);
    });
    const user = computed(() => {
      return store.getters.user;
    });
    const signOut = async () => {
          await store.dispatch('logOut')
          router.push('/login')
    }
      return {user,signOut,admin}
   },

    data() {
      return {
        questions: [],
        loading: true,
        index: 0,
        timeTake: "",
            History: {
                questionCount:"",
                correctAnswers:"",
                averageScore: "",
                timeTaken: "",
                timeFinished: "",
            },
      };
    },
    computed: {
      currentQuestion() {
        if (this.questions !== []) {
          return this.questions[this.index];
        }
        return null;
      },
      correctAnswers() {
        if (this.questions && this.questions.length > 0) {
          let streakCounter = 0;
          this.questions.forEach(function (question) {
            if (!question.rightAnswer) {
              return;
            } else if (question.rightAnswer === true) {
              streakCounter++;
            }
          });
          return streakCounter;
        } else {
          return "--";
        }
      },
      quizCompleted() {
        if (this.questions.length === 0) {
          return false;
        }
        /* Check if the user answered all questions */
        let questionsAnswered = 0;
        this.questions.forEach(function (question) {
          question.rightAnswer !== null ? questionsAnswered++ : null;
        });
        return questionsAnswered === this.questions.length;
      },
      score() {
        if (this.questions !== []) {
          return {
            allQuestions: this.questions.length,
            answeredQuestions: this.questions.reduce((count, currentQuestion) => {
              if (currentQuestion.userAnswer) {
                count++;
              }
              return count;
            }, 0),
            correctlyAnsweredQuestions: this.questions.reduce(
              (count, currentQuestion) => {
                if (currentQuestion.rightAnswer) {
                  count++;
                }
                return count;
              },
              0
            ),
          };
        } else {
          return {
            allQuestions: 0,
            answeredQuestions: 0,
            correctlyAnsweredQuestions: 0,
          };
        }
      },
    },
    watch: {
      quizCompleted(completed) {
        completed &&
          setTimeout(() => {
            this.saveHistory()
            this.$emit("quiz-completed", this.score);
          }, 3000);
      },
    },
    methods: {
      //Saves Quiz Results tas lalagay daw sa database
      saveHistory() {
            const today = new Date();
            var data = {
                questionCount: this.score.allQuestions,
                correctAnswers: this.score.correctlyAnsweredQuestions,
                averageScore: Math.floor(
                    (this.score.correctlyAnsweredQuestions / this.score.allQuestions) *
                    100
                ) + "%",
                timeTaken: this.timeTake,
                timeFinished: today.toGMTString(),
            };
            DataService.create(data)
                .then(() => {
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },

      async fetchQuestions() {
        var today = new Date()
        this.timeTake = today.toGMTString()

        this.loading = true;
        //fetching questions from AXIOS api
        let {data} = await axios.get(
          "https://opentdb.com/api.php?amount=5&category=31&type=multiple"
        );
        let index = 0;
        let questions = data.results.map((question) => {
          question.answers = [
            question.correct_answer,
            ...question.incorrect_answers,
          ];

          //shuffle answers
          for (let i = question.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.answers[i], question.answers[j]] = [
              question.answers[j],
              question.answers[i],
            ];
          }

          //insert correct answer
          question.rightAnswer = null;
          question.key = index;
          index++;
          return question;
        });
        this.questions = questions;
        this.loading = false;
      },
  
      handleClick(e) {
        let index = e.target.getAttribute("index");
        let pollutedUserAnswer = e.target.innerHTML; // innerHTML is polluted with decoded HTML entities e.g ' from &#039;
        /* Unescape single qoute characters*/
        let userAnswer = pollutedUserAnswer.replace(/'/, "&#039;");
        //set user's answer
        this.questions[index].userAnswer = userAnswer;
        e.target.classList.add("clicked");
        let allButtons = document.querySelectorAll(`[index="${index}"]`);
  
        for (let i = 0; i < allButtons.length; i++) {
          if (allButtons[i] === e.target) continue;
  
          allButtons[i].setAttribute("disabled", "");
        }
        this.checkCorrectAnswer(e, index);
      },
  
      checkCorrectAnswer(e, index) {
        let question = this.questions[index];
        if (question.userAnswer) {
          if (this.index < this.questions.length - 1) {
            setTimeout(
              function () {
                this.index += 1;
              }.bind(this),
              3000
            );
          }
          if (question.userAnswer === question.correct_answer) {
            /* CSS animation if user answered correctly
            */
            e.target.classList.add("rightAnswer");
            /* set righAnswer to true*/
            this.questions[index].rightAnswer = true;
          } else {
            /* rightAnswer is set to true, meaning the user answered wrong */
            e.target.classList.add("wrongAnswer");
            this.questions[index].rightAnswer = false;
            /* reveal the correct answer */
            let correctAnswer = this.questions[index].correct_answer;
            let allButtons = document.querySelectorAll(`[index="${index}"]`);
            allButtons.forEach(function (button) {
              if (button.innerHTML === correctAnswer) {
                button.classList.add("showRightAnswer");
              }
            });
          }
        }
      },
    },
    mounted() {
      this.fetchQuestions();
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  button {
    font-size: 1.1rem;
    box-sizing: border-box;
    padding: 1rem;
    margin: 0.5rem;
    width: 40%;
    background-color:rgb(254, 252, 43, 0.7);
    border: none;
    border-radius: 0.2rem;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  }
  button:hover:enabled {
    transform: scale(1.02);
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  button:active:enabled {
    transform: scale(1.05);
  }
  
  @keyframes flashButton {
    0% {
      opacity: 1;
      transform: scale(1.01);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.02);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  button.clicked {
    pointer-events: none;
  }
  
  button.rightAnswer {
    animation: flashButton;
    animation-duration: 700ms;
    animation-delay: 200ms;
    animation-iteration-count: 3;
    animation-timing-function: ease-in-out;
    color: black;
    background-color: #4cb55f;
  }
  
  button.wrongAnswer {
    color: black;
    background-color: #e04646;
  }
  
  button.showRightAnswer {
    animation: flashButton;
    animation-duration: 300ms;
    animation-delay: 100ms;
    animation-iteration-count: 2;
    animation-timing-function: ease-in-out;
    color: black;
    background-color: #4cb55f
  }
  </style>
  