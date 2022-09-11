<template>
  <nav>
      <v-toolbar app class="bg-green-lighten-2">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Midterm </span>
        <span>Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
        <span class="me-2 font-weight-medium text-grey-darken-3">RAVEN TAMAYO</span>
        <v-avatar
          color="grey-lighten-3"
          size="40px"
        >
          <v-img
            src="https://cdn.discordapp.com/attachments/1017009278445432862/1017009453033332836/me.jpg"
            >
          </v-img>
        </v-avatar>
        <v-icon right>exit_to_app</v-icon>
      
      
      
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" class="" >
     
      <div class="text-h4 ml-8 mt-4 mb-2 font-weight-black text-green-lighten-1"> 
        <v-icon
        >
        mdi-vuetify
      </v-icon>Menu</div>
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon"
          height="100px">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Simple Calculator', icon: 'mdi-calculator', path: '/basicMath' },
           { title: 'String Manipulator', icon: 'mdi-format-text', path: '/stringApp'},
           { title: 'Quiz App', icon: 'mdi-brain', path: '/axios'},
           { title: 'About Vuetify', icon: 'mdi-vuetify', path: '/aboutVuetify'},
           { title: 'About Raven Tamayo', icon: 'mdi-account-circle-outline', path: '/aboutMe'},
           { title: 'About the Apps', icon: 'mdi-information', path: '/about'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }



 
</script>