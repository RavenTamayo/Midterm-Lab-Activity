<template>
    <v-container fluid>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="5">
                <v-card class="pa-6" color="rgb(255, 255, 255, 0.3)">
                    <div class="text-h4 text-white mb-5">Register Account</div>
                    <v-text-field
                    variant="solo"
                    label="Email"
                    type="email"
                    v-model="email"
                    ></v-text-field>

                    <v-text-field
                    variant="solo"
                    label="Password"
                    type="password"
                    v-model="password"
                    ></v-text-field>    
                    <v-btn
                    color="success"
                    class="mr-4"
                    @click="register"
                    >Create Account</v-btn>
                    <v-btn
                    variant="plain"
                    class="mr-4 text-white"
                    to="/login"
                    >Already have an acccount?</v-btn>

                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { useRouter } from 'vue-router'
import router from "../router";
const email = ref("");
const password = ref("");
const register = () => {

    createUserWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data)=>{
        console.log("Successfully Registered")
        router.push('/') //redirect to home
    })
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result)=>{
            console.log(result.user);
            router.push("/");
        })
        .catch((error)=>{

        });
};
</script>