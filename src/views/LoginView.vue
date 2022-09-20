<template>
  <v-container fluid>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="6"> 
        <v-card
        min-width="300"
      class="pa-6"
      color="rgb(255, 255, 255, 0.3)"
      >
    <div class="text-h4 text-white mb-2">Login</div>
      <v-form
        @submit.prevent="Login"
      >
      <!--Email-->
        <v-text-field
        variant="solo"
        label="E-mail"
        type="email"
        v-model="email"
        :rules="[rules.required, rules.email]"
        ></v-text-field>

      <!--Password-->
        <v-text-field
        variant="solo"
        label="Password"
        type="password"
        required
        v-model="password"
        ></v-text-field>

        <!--Error Message-->
        <div v-if="error" class="text-white bg-red mb-3 rounded pa-2">{{error}}</div>

      <!--Login Button-->
        <v-btn
        color="success"
        type="submit"
        >Login</v-btn>

      <!--Register Link-->
        <v-btn
        color="white"
        variant="plain"
        to='/register'
        >Don't have and account yet?</v-btn>
      </v-form>
    </v-card></v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>>
   
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  export default {
    data () {
      return {
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
      setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const store = useStore()
      const router = useRouter()
      const Login = async () => {
        try {
          await store.dispatch('logIn', {
            email: email.value,
            password: password.value
          })
          router.push('/')
        }
        catch (err) {
          error.value = err.message
        }
      }
      return { Login, email, password, error }
    }
  };
  </script>