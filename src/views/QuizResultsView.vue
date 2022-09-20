<template>
    <v-container fluid>
        <div v-if="user.loggedIn">
            <v-card class="pa-1 mb-4" color="rgb(255, 255, 255, 0.3)">
                <div class="text-h4 text-white ml-2">Welcome, <span class="text-green">{{user.data.displayName}}</span>
                </div>
            </v-card>
            <v-btn color="success" class="text-white mb-3" to="/axios">
                <v-icon>mdi-keyboard-return</v-icon>
                Back to Quiz
            </v-btn>
            <v-row>
                <v-col cols="6">
                    <v-card class="pa-3">
                        <v-card-title class="text-h5 font-weight-bold">Quiz History</v-card-title>
                        <v-list :class="{ active: index == currentIndex }" v-for="(history, index) in List"
                            :key="index">
                            <v-list-item @click="setActiveHistory(history, index)">{{ index+1 + ".) "
                            +history.timeTaken}}
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card class="pa-3">
                        <v-card-title class="text-h5 font-weight-bold">History</v-card-title>
                        <div v-if="currentHistory">
                            <QuizDetails :history="currentHistory" @refreshList="refreshList" />
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>

</template>
  
<script>

import QuizDetails from "./QuizDetailsView.vue";
import { database } from "../firebase";
import DataService from "../services/DataService";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebase'

export default {
    setup() {

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
        return { user, signOut }
    },
    components: { QuizDetails: QuizDetails },
    data() {
        return {
            admin: false,
            List: [],
            currentHistory: null,
            currentIndex: -1,
            historyClicked: false,
        };
    },
    methods: {
        onDataChange(items) {
            let _history = [];

            if (this.admin) {
                items.forEach((item) => {
                    let userID = item.key;
                    const dbRef = database.ref("Users/" + userID + "/History");
                    dbRef.on('value', (snapshot) => {
                        snapshot.forEach((list) => {
                            let key = list.key
                            let data = list.val()
                            _history.push({
                                userID: userID,
                                key: key,
                                questionCount: data.questionCount,
                                correctAnswers: data.correctAnswers,
                                averageScore: data.averageScore,
                                timeTaken: data.timeTaken,
                                timeFinished: data.timeFinished,
                            });
                        })
                    })
                });
                this.List = _history;
            } else {

                items.forEach((item) => {
                    let key = item.key;
                    let data = item.val();
                    _history.push({
                        userID: "0",
                        key: key,
                        questionCount: data.questionCount,
                        correctAnswers: data.correctAnswers,
                        averageScore: data.averageScore,
                        timeTaken: data.timeTaken,
                        timeFinished: data.timeFinished,
                    });
                });
                this.List = _history;
            }
        },
        refreshList() {
            this.currentHistory = null;
            this.currentIndex = -1;
            this.historyClicked = false;
        },
        setActiveHistory(history, index) {
            this.currentHistory = history;
            this.currentIndex = index;
        },
    },
    mounted() {
        this.admin = DataService.isAdmin();
        DataService.getAll().on("value", this.onDataChange);
    },
    beforeUnmount() {
        DataService.getAll().off("value", this.onDataChange);
    }
};
</script>
  
<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>