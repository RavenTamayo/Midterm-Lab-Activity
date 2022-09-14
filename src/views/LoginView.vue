<template>
    <v-container fluid>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="5">
                <v-card class="pa-6" color="rgb(255, 255, 255, 0.3)">
                    <div class="text-h4 text-white mb-5">Login Account</div>
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
                    
                    <div class="text-body-1 mb-2 ">{{errMsg}}</div>

                    <v-btn
                    color="success"
                    class="mr-4"
                    @click="register"
                    >Login</v-btn>
                    <v-btn
                    variant="plain"
                    class="mr-4 text-white"
                    to="/register"
                    >Dont have an account?</v-btn>

                    <!-- <v-btn
                    color="success"
                    @click="signInWithGoogle"
                    >Sign in with Google
                    <v-icon class="ml-2">mdi-google</v-icon>
                </v-btn> -->
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'vue-router'
import router from "../router"
const email = ref("")
const password = ref("")
const errMsg = ref()
const register = () => {

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data)=>{
        //alert("Successfully Signed in")
        errMsg.value="Successfully Logged In"
        console.log(auth.currentUser)
        router.push('/') //redirect to home
    })
    .catch((error)=>{
        console.log(error.code)
        switch (error.code){
            case "auth/invalid-email":
                errMsg.value = "Invalid E-mail"
                break
            
            case "auth/user-not-found":
                errMsg.value = "That email is not registered yet"
                break

            case "auth/wrong-password":
                errMsg.value = "Incorrect Password"
                break

            default:
                errMsg.value = "Invalid E-mail or  Incorrect Password"
                break;
        }
    })
};

const signInWithGoogle = () => {

}
</script>