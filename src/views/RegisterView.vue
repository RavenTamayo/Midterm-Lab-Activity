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
        <div class="text-h4 text-white mb-2">Register</div>
        <v-form 
          @submit.prevent="Register"
        >
          <!--Username textfield-->
          <v-text-field
            class=""
            variant="solo"
            label="Username"
            v-model="name"
            type="name"
            :rules="[rules.required]"
          ></v-text-field>
          
          <!--Email textfield-->
          <v-text-field
          class=""
          variant="solo"
          label="E-mail"
          v-model="email"
          type="email"
          :rules="[rules.required, rules.email]"
          >
          </v-text-field>

          <!--Password Textfield-->
          <v-text-field
            class=""
            variant="solo"
            label="Password"
            type="password"
            v-model="password"
            :rules="[rules.required]"
          >
          </v-text-field>

          <!--Error message-->
          <div v-if="error" class="text-white bg-red mb-3 rounded pa-2">{{error}}</div>

          <!--Submit Button-->
          <v-btn
          type="submit"
          color="success"
          >
          Register
          </v-btn>

          <!--Login Link-->
          <v-btn
          variant="plain"
          color="white"
          to='/login'
          >
          Already have an account?
          </v-btn>
        </v-form>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
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
      const name = ref('')
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const store = useStore()
      const router = useRouter()
      const Register = async () => {
        try {
          await store.dispatch('register', {
            email: email.value,
            password: password.value,
            name: name.value
          })
          router.push('/')
        }
        catch (err) {
          error.value = err.message
              }
      }
      return { Register, name,email, password, error }
    }
  };
  </script>