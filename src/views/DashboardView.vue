<template>
  <v-container fluid>
    <!-- Show if user is logged in -->
    <div v-if="user.loggedIn">
      <v-card 
      class="pa-1 mb-4"
      color="rgb(255, 255, 255, 0.3)"
      >
      <div class="text-h4 text-white ml-2">Welcome, <span class="text-green">{{user.data.displayName}}</span> </div>
    </v-card>
    <!-- <v-card
      class="pa-4"
      color="rgb(255, 255, 255, 0.3)"
      > -->
        
      <div class="text-h1 text-white ml-2 font-weight-medium">The <span class="text-green">Final</span> Project.</div>
      <v-row>
          <v-col>
            <div class="text-subtitle-1 text-white ml-3 mt-3 mb-6" width="50px">Welcome to my Final Project for the course CIT 510 - IT41S2 also known as Integrative Programming and Technologies 2. This website contain apps such as the Calculator App, String Manipulator App, Pop Quiz App and many more. </div>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      <!-- </v-card> -->

      <!--Gallery Carousel-->
      <v-card
      class="pa-4 mt-4"
      color="rgb(255, 255, 255, 0.3)"
      >
        
        <div class="text-center text-h3 mb-2 text-white">Featured Apps</div>
        <v-carousel
        show-arrows="hover"
        hide-delimiter-background
        class="mb-3"
        >
            <v-carousel-item
            v-for="(image,i) in images"
            :src="image.src"
            :key="i"
            >
          <!-- <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2 font-weight-medium text-green">
            {{ applications[i] }} App
          </div>
        </div> -->
          </v-carousel-item>
        </v-carousel>
    </v-card>
    </div>
   
    <!-- Show if user is not logged in -->
    <div v-else> 
      <!-- <v-card
      class="pa-4"
      color="rgb(255, 255, 255, 0.3)"
      > -->
        
      <div class="text-h1 text-white ml-2 font-weight-medium">The <span class="text-green">Final</span> Project.</div>
  
      <v-row>
          <v-col cols="8">
            <div class="text-subtitle-1 text-white ml-3 " width="50px">Welcome to my Final Project for the course CIT 510 - IT41S2 also known as Integrative Programming and Technologies 2. This website contain apps such as the Calculator App, String Manipulator App, Pop Quiz App and many more. <span class="text-white bg-green font-weight-bold rounded px-2">Login now to use the apps.</span></div>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      <!-- </v-card> -->
      <v-card
      class="pa-4 mt-5"
      color="rgb(255, 255, 255, 0.3)"
      >
        <!--Gallery Carousel-->
        <div class="text-center text-h3 mb-2 text-white">Featured Apps</div>
        <v-carousel
        show-arrows="hover"
        hide-delimiter-background
        class="mb-3"
        >
            <v-carousel-item
            v-for="(image,i) in images"
            :src="image.src"
            :key="i"
            >
          </v-carousel-item>
        </v-carousel>
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
  export default {

    data() {
      return {
        images: [
        {
            src: 'https://cdn.discordapp.com/attachments/1017009278445432862/1021716199601623090/calc.gif',
            },
            {
            src: 'https://cdn.discordapp.com/attachments/1017009278445432862/1021719805469925376/stman.gif',
            },
           
            {
            src: 'https://cdn.discordapp.com/attachments/1017009278445432862/1021720380722925648/popquiz.gif',
            },
        ],

        applications: [
          'Simple Calculator',
          'String Manipulator',
          'Pop Quiz',
        ]
      }
    },
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
   }
    
    
  };
  </script>