<template>
  <nav>
      <v-toolbar app class="bg-transparent text-white">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Midterm </span>
        <span>Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
          <v-btn
            @click="handleSignOut"
            color="white"
            v-if="isLoggedIn"
            >
            Sign Out
          </v-btn>
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
      <v-navigation-drawer app v-model="drawer" >
        <v-parallax src="https://cdn.discordapp.com/attachments/1017009278445432862/1018717669572231218/drawer-bg.png" class="fill-height" cover>
      <div class="text-h4 text-center mr-7 mt-4 mb-2 font-weight-black text-green-lighten-1"> 
        <v-icon
        >
        mdi-vuetify
      </v-icon>Menu</div>
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon"
          height="100px"
          class="text-white">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-parallax>
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
  import { useRouter } from "vue-router";
  const router = useRouter();
  const isLoggedIn = ref(false)
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Simple Calculator', icon: 'mdi-calculator', path: '/basicMath' },
           { title: 'String Manipulator', icon: 'mdi-format-text', path: '/stringApp'},
           { title: 'Pop Quiz App', icon: 'mdi-brain', path: '/axios'},
           { title: 'About Vuetify', icon: 'mdi-vuetify', path: '/aboutVuetify'},
           { title: 'About Raven Tamayo', icon: 'mdi-account-circle-outline', path: '/aboutMe'},
           { title: 'About the Apps', icon: 'mdi-information', path: '/about'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 let auth
  onMounted(()=>{
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user) {
        isLoggedIn.value=true
      } else {
        isLoggedIn.value=false
      }
    })
  })

  const handleSignOut = () => {
    signOut(auth).then(()=>{
      router.push('/login')
    })
  }

 
</script>

<style scoped>
#list-bg{
  background-color: rgb(255, 255, 255, 0.6);
}
</style>