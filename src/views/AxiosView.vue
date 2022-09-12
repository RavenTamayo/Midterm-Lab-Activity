<template>
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
</template>
<script>
   import CustomModal from "../components/ResultModal.vue";
   import Quiz from "../components/Quiz.vue";
   
   export default {
     components: { Quiz, CustomModal },
     name: "App",
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
   