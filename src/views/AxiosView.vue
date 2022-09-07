<template>
    <v-container fluid>
        <h1 class="text-center mb-3">Open Trivia DB Quiz</h1>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="auto"><v-btn 
                @click="showQuestions"
                class="bg-green-lighten-3"
                >New Quiz</v-btn></v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col>
                <v-list-item
                    v-for="(question, index) in questions"
                >
                <div class="text-subtitle-2 mb-4"><span class="font-weight-medium">{{index+1}}.) {{convertChar(question.question)}}</span></div>
                <v-text-field
                variant="outlined"
                label="Correct Answer"
                readonly
                :model-value="convertChar(question.correct_answer)"
                ></v-text-field>
                </v-list-item>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
       
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
    
    const questions = ref([])
    async function showQuestions(){
        axios.get('https://opentdb.com/api.php?amount=10&type=multiple').then(response => {
            questions.value=(response.data.results)
        })
    }

    function convertChar(character){
    character=character.replace(/&quot;/g , "\"");
    character=character.replace(/&#039;/g , "\'");
    character=character.replace(/&amp;/g , "&");
    return character;
 }
</script>