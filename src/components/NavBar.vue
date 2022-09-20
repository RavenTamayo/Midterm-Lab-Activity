<template>
  <nav>
    <v-toolbar app class="bg-transparent text-white">
      <v-app-bar-nav-icon @click='toggleDrawer()'></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Final </span>
        <span>Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user.loggedIn">
        <v-btn @click.prevent="signOut()" color="white">
        Sign Out
      </v-btn>
      </div>
      <div v-else>
        <v-btn router :to="login" color="white">
          Login
        </v-btn>
        <v-btn router :to="register" color="white">
          Register
        </v-btn>
      </div>
      
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list id="list-bg">
          <v-list-item v-for="(item, index) in items" :key="index" router :to="item.path" :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
      <v-parallax src="https://cdn.discordapp.com/attachments/1017009278445432862/1018717669572231218/drawer-bg.png"
        class="fill-height" cover>
        <div class="text-h4 text-center mr-7 mt-4 mb-2 font-weight-black text-green-lighten-1">
          <v-icon>
            mdi-vuetify
          </v-icon> <div class="text-h4 font-weight-black">Menu</div>
        </div>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon"
          height="80px" class="text-white">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-parallax>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebase'
import DataService from "../services/DataService";
export default {
  data() {

    return {
      login: '/login',
      register: '/register',
      drawer: false,
      items: [
      { title: 'Home', icon: 'mdi-home', path: '/' },
        { title: 'Simple Calculator', icon: 'mdi-calculator', path: '/basicMath' },
        { title: 'String Manipulator', icon: 'mdi-format-text', path: '/stringApp' },
        { title: 'Pop Quiz App', icon: 'mdi-brain', path: '/axios' },
        { title: 'About Vuetify', icon: 'mdi-vuetify', path: '/aboutVuetify' },
        { title: 'About Dev', icon: 'mdi-account-circle-outline', path: '/aboutMe' },
        { title: 'About the Apps', icon: 'mdi-information', path: '/about' },
      ],
    }
    },
    
    methods: {
      toggleDrawer(){
      return this.drawer= !this.drawer
    }
    },

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
    return { user, signOut, admin }
  
  },

};
</script>

<style scoped>
#list-bg {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>