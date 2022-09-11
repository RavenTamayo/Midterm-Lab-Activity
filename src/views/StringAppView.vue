<template>
     <v-container>
          <div class="bg-green-lighten-2 pa-5 rounded">
               <div class="text-h4 mb-3">String Manipulator</div>
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
                         ></v-text-field>
                    </v-col>
                    <v-col>
                         <v-text-field
                              label="All Upper Case"
                              readonly
                              variant="outlined"
                              v-model="allUpper"
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
                         ></v-text-field>
                    </v-col>
                    <v-col>
                         <v-text-field
                              label="Replace Vowels"
                              readonly
                              variant="outlined"
                              v-model="vowelReplace"
                         ></v-text-field>
                    </v-col>
               </v-row>
          </div> 
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
