<template>
  <v-container fluid>
    <!-- show if user is logged in -->
  <div v-if="user.loggedIn">
               <v-card 
                    class="pa-1 mb-4"
                    color="rgb(255, 255, 255, 0.3)"
                    >
                    <div class="text-h4 text-white ml-2">Welcome, <span class="text-green">{{user.data.displayName}}</span> </div>
               </v-card>
            <!-- Quiz App -->
                <div id="app">
                  <div class="text-h3 mt-4 text-white font-weight-bold">Pop Quiz App</div>
                  <div class="text-h6 mt-3 text-white">Category: Entertainment | Japanese Anime & Manga</div>
                  <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
                  <custom-modal
                    v-show="showModal"
                    :score="score"
                    @reload="updateQuiz"
                    @close="showModal = false"
                  />
                </div>
  </div>

  <!-- show if user is not logged in -->
  <div v-else>
               <!-- Header The Final Project -->
          <!-- <v-card
               class="pa-4"
               color="rgb(255, 255, 255, 0.3)"
               > -->
        
      <div class="text-h1 text-white ml-2 font-weight-medium">The <span class="text-green">Final</span> Project.</div>
  
      <v-row>
          <v-col cols="8">
            <div class="text-subtitle-1 text-white ml-3 " width="50px">Welcome to my Final Project for the course CIT 510 - IT41S2 also known as Integrative Programming and Technologies 2. This website contain apps such as the Calculator App, String Manipulator App, Pop Quiz App and many more. <span class="text-white bg-green font-weight-bold rounded px-2">Login now to use the apps.</span> </div>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      <!-- </v-card> -->

      <v-card
      class="pa-4 mt-4"
      color="rgb(255, 255, 255, 0.3)"
      >
      <div class="text-center text-h3 mb-2 text-white">Pop Quiz App</div>
      <v-row justify="center">
        <v-col cols="8"><div class="text-body-1 text-center text-white mb-2">A simple quiz app with question from the Open Trivia Database. Try your best to answer the questions and get a passing score.<span class="text-white font-weight-bold bg-green px-2 rounded">Login now to take the pop quiz app.</span></div></v-col>
      </v-row>
      
      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-img
          src="https://cdn.discordapp.com/attachments/1017009278445432862/1021720380722925648/popquiz.gif"
          width="800"
          >

          </v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      </v-card>
     </div>
    </v-container>
</template>
<script>
   import CustomModal from "../components/ResultModal.vue";
   import Quiz from "../components/Quiz.vue";
   import { useStore} from "vuex";
   import { useRouter } from "vue-router";
   import {computed} from "vue";
   import { auth } from '../firebase'
   import DataService from "../services/DataService";
  
   export default {
     components: { Quiz, CustomModal },
     name: "App",
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
         quizKey: 0,
         showModal: false,
         score: {
           allQuestions: 0,
           answeredQuestions: 0,
           correctlyAnsweredQuestions: 0,
         },
       };
     },
     methods: {
       handleQuizCompleted(score) {
         this.score = score;
         this.showModal = true;
       },
       updateQuiz() {
         this.showModal = false;
         this.quizKey++;
       },
     },
   };
   </script >
   
   <style scoped>
   * {
     box-sizing: border-box;
   }
   #app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color:black;
     line-height: 1.6;
   }
   </style>
   