<template>
<v-container fluid>
  <!-- If user is logged in -->
  <div v-if="user.loggedIn">
    <v-card 
      class="pa-1 mb-4"
      color="rgb(255, 255, 255, 0.3)"
      >
      <div class="text-h4 text-white ml-2">Welcome, <span class="text-green">{{user.data.displayName}}</span> </div>
    </v-card>
    <v-card color="rgb(255, 255, 255, 0.3)" class="pa-6 mt-5">
    <div class="text-h4 text-white">Simple Calculator</div>
    <br>
        <v-text-field label="First Input" v-model.number="fNumber" type="number" variant="solo"></v-text-field>
        <v-text-field label="Second Input" v-model.number="sNumber" type="number" variant="solo"></v-text-field>
        <div class="text-caption mb-2 text-white">Operations:</div>
        <v-row justify="start">
          <v-col cols="auto"> <v-btn @click="doSum()" class="mr-3 bg-grey-lighten-2">+</v-btn></v-col>
          <v-col cols="auto"><v-btn @click="doDiff" class="mr-3 bg-grey-lighten-2">-</v-btn></v-col>
          <v-col cols="auto"><v-btn @click="doProd" class="mr-3 bg-grey-lighten-2">*</v-btn></v-col>
          <v-col cols="auto"><v-btn @click="doQout" class="mr-3 bg-grey-lighten-2">/</v-btn></v-col>
          <v-col cols="auto"><v-btn @click="doAve" class="mr-3 bg-grey-lighten-2">Average</v-btn></v-col>
        </v-row>
        <br>
        <v-text-field
          v-model="ans"
            label="Result"
            readonly
            variant="outlined"
            class="text-white font-weight-bold"
          ></v-text-field>
  </v-card>
  </div>
  
  <!-- If user is not logged in -->
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
      <div class="text-center text-h3 mb-2 text-white">Simple Calculator App</div>
      <v-row justify="center">
        <v-col cols="6"><div class="text-body-1 text-center text-white mb-2">A simple calculator app that can compute basic mathematical operations. Made with vuetify components. <span class="text-white font-weight-bold bg-green px-2 rounded">Login now to use the simple calculator app.</span></div></v-col>
      </v-row>
      
      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-img
          src="https://cdn.discordapp.com/attachments/1017009278445432862/1021716199601623090/calc.gif"
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
  import { useStore} from "vuex";
  import { useRouter } from "vue-router";
  import {computed} from "vue";
  import { auth } from '../firebase'
  import DataService from "../services/DataService";
  export default{
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
      return{
        fNumber: 0,
        sNumber: 0,
        ans: 0,
      }
    },

    methods: {
      //addition
      doSum(){
    this.ans = this.fNumber + this.sNumber
    return this.ans
  },

    // subtraction
    doDiff(){
    this.ans=this.fNumber - this.sNumber
    return this.ans
  },

    //division
    doQout(){
    this.ans=this.fNumber / this.sNumber
    return this.ans
  },

    //multiplication
    doProd(){
    this.ans=this.fNumber * this.sNumber
    return this.ans
  },

    //average
    doAve(){
    this.ans=(this.fNumber + this.sNumber)/2
    return this.ans
  },
    },
  };
</script>


