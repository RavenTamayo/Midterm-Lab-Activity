<template>
     <v-container fluid>
          <!-- if user is logged in -->
          <div v-if="user.loggedIn">
               <v-card 
                    class="pa-1 mb-4"
                    color="rgb(255, 255, 255, 0.3)"
                    >
                    <div class="text-h4 text-white ml-2">Welcome, <span class="text-green">{{user.data.displayName}}</span> </div>
               </v-card>
               <v-card color="rgb(255, 255, 255, 0.3)" class="pa-6 mt-5">
               <div class="text-h4 mb-3 text-white">String Manipulator</div>
               <v-row>
                    <v-col cols="10">
                         <v-text-field
                              label="String"
                              placeholder="Enter string"
                              variant="solo"
                              @keyup.enter="doManipulate"
                              v-model="stringInput"
                         >
                         </v-text-field>
                    </v-col>
                    <v-col cols="2">
                         <v-btn
                              class="mb-6"
                              icon="mdi-auto-fix"
                              @click="doManipulate"
                         >
               </v-btn>
                    </v-col>
               </v-row>
               
               <v-row>
                    <v-col>
                         <v-text-field
                              label="Vowel Count"
                              readonly
                              variant="outlined"
                              v-model="vowelCount"
                              class="text-white font-weight-medium"
                         ></v-text-field>
                    </v-col>
                    <v-col>
                         <v-text-field
                              label="All Upper Case"
                              readonly
                              variant="outlined"
                              v-model="allUpper"
                              class="text-white font-weight-medium"
                         ></v-text-field>
                    </v-col>
               </v-row>
               <v-row>
                    <v-col>
                         <v-text-field
                              label="All Lowercase"
                              readonly
                              variant="outlined"
                              v-model="allLower"
                              class="text-white font-weight-medium"
                         ></v-text-field>
                    </v-col>
                    <v-col>
                         <v-text-field
                              label="Replace Vowels"
                              readonly
                              variant="outlined"
                              v-model="vowelReplace"
                              class="text-white font-weight-medium"
                         ></v-text-field>
                    </v-col>
               </v-row>
               </v-card> 
          </div>

          <!-- Show this if user is not logged in -->
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
      <div class="text-center text-h3 mb-2 text-white">String Manipulator App</div>
      <v-row justify="center">
        <v-col cols="8"><div class="text-body-1 text-center text-white mb-2">Counts the vowels of your text input, converts it to all upper case, all lowercase, and converts all of the vowels into "*". Made using vuetify components <span class="text-white font-weight-bold bg-green px-2 rounded">Login now to use the string manipulator app.</span></div></v-col>
      </v-row>
      
      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-img
          src="https://cdn.discordapp.com/attachments/1017009278445432862/1021719805469925376/stman.gif"
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
          stringInput: '',
          vowelCount: 0,
          allUpper:'',
          allLower:'',
          vowelReplace:'', 
          }
     },
     methods: {
          doManipulate() {
               this.vowelCount = this.stringInput.match(/[aeiou]/gi).length
               this.allUpper = this.stringInput.toLocaleUpperCase()
               this.allLower = this.stringInput.toLocaleLowerCase()
               this.vowelReplace = this.stringInput.replace(/[aeiou]/g,"*")
          }
     }

   
}
</script>

