
<template>
<v-container>
  <div class="bg-green-lighten-2 pa-5 rounded">
    <div class="text-h4">Simple Calculator</div>
    <br>
        <v-text-field label="First Input" v-model.number="fNumber" type="number" variant="solo"></v-text-field>
        <v-text-field label="Second Input" v-model.number="sNumber" type="number" variant="solo"></v-text-field>
        <div class="text-caption mb-2">Operations:</div>
        <v-row justify="start">
          <v-col cols="auto"> <v-btn @click="doSum" class="mr-3 bg-grey-lighten-2">+</v-btn></v-col>
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
          ></v-text-field>
  </div>
   
</v-container>
 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref(0)
  const sNumber=ref(0)
  const ans=ref(0)

  function doSum(){
    ans.value = fNumber.value + sNumber.value
    return ans.value
  }

  function doDiff(){
    ans.value=fNumber.value - sNumber.value
    return ans.value
  }

  function doProd(){
    ans.value=fNumber.value * sNumber.value
    return ans.value
  }

  function doQout(){
    ans.value=fNumber.value / sNumber.value
    return ans.value
  }

  function doAve(){
    ans.value=(fNumber.value + sNumber.value)/2
    return ans.value
  }
</script>


