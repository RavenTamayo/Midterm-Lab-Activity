<template>
   <v-app>
    <v-main id="main">
       <Navbar/>
       <router-view></router-view>
    </v-main>
   </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
</script>

<style scoped>
   #main{
      background-image: url("https://cdn.discordapp.com/attachments/1017009278445432862/1018558473853751407/bg.webp");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
   }  
</style>
