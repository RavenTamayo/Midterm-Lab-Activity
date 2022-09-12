<template>
     <v-container>
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
     </v-container>
   

</template>

<script setup>
import {ref} from 'vue'

const stringInput = ref('')
const vowelCount = ref(0)
const allUpper = ref("")
const allLower = ref("")
const vowelReplace = ref("")

function doManipulate () {
     vowelCount.value = stringInput.value.match(/[aeiou]/gi).length;
     allUpper.value = stringInput.value.toLocaleUpperCase()
     allLower.value = stringInput.value.toLocaleLowerCase()
     vowelReplace.value =stringInput.value.replace(/[aeiou]/g,"*")
}

</script>
