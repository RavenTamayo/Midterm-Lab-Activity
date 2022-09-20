<template>
    <v-container>
    <v-card color="rgb(255, 255, 255, 0.2)" class="pa-5">
        <v-img
            src="https://cdn.discordapp.com/attachments/1017009278445432862/1017009453033332836/me.jpg"
            height="150"
            width="150"
            class="rounded-circle ml-4"
            cover
        >
        
        </v-img>
        <div class="text-h4 ml-4 text-white">Raven Tamayo </div>
        <span class="text-caption text-white ml-4">Developer</span>
        <v-divider class="mt-1 mb-2 mx-4" color="white"></v-divider>
        <div class="text-caption ml-4 text-white"><v-icon class="mr-2">mdi-school-outline</v-icon>Technological Institute of the Philippines</div>
        <div class="text-caption ml-4 text-white"><v-icon class="mr-2">mdi-script-outline</v-icon>Bachelor of Science in Information Technology</div>
        <div class="text-caption ml-4 text-white"><v-icon class="mr-2">mdi-email-outline</v-icon>mrjztamayo@tip.edu.ph</div>
        <div class="text-caption ml-4 text-white"><v-icon class="mr-2">mdi-map-marker-outline</v-icon>Sta. Mesa</div>
        <v-divider class="mt-2 mb-2 mx-4" color="white"></v-divider>
        <div class="text-body-1 ml-4 text-white font-weight-black">Socials:</div>
        <div class="d-flex flex-row justify-space-around bg-grey-lighten-5 rounded mx-4">

            <v-sheet class="bg-transparent ml-16">
                <v-btn icon href="https://www.facebook.com/raven.jamel24" target="blank" flat class="bg-transparent"><v-icon class="text-blue" size="x-large">mdi-facebook</v-icon></v-btn>
            </v-sheet>
            <v-divider vertical></v-divider>
            <v-sheet class="bg-transparent">
                <v-btn icon href="https://www.instagram.com/raven_tamayo_0/" target="blank" class="bg-transparent" flat><v-icon class="text-pink" size="x-large">mdi-instagram</v-icon></v-btn>
            </v-sheet>
            <v-divider vertical></v-divider>
            <v-sheet class="bg-transparent mr-16">
                <v-btn icon href="https://www.youtube.com/channel/UCGh6Xqm678oEfEx75Knfc_A/featured" class="bg-transparent" target="blank" flat><v-icon class="text-red" size="x-large">mdi-youtube</v-icon></v-btn>
            </v-sheet>
         </div>
         
    </v-card>
        
         <br>
        <!--Expansion Panels-->
        <v-expansion-panels variant="accordion">
                <v-expansion-panel>
                    <v-expansion-panel-title ><span class="font-weight-black">A little about myself</span> </v-expansion-panel-title>
                    <v-expansion-panel-text>Hello everyone! I'm Raven, and I'm 22 years old. I'm currently pursuing Bachelor of Science in Information Technology at the Technological Institute of the Philippines.
                </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-title ><span class="font-weight-black">Things I like</span> </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <ul class="ml-3">
                                <li>Music</li>
                                <li>Fruits</li>
                                <li>Calamares sheesh!</li>
                                <li>Neon Lights</li>
                                <li>Siya charizzzu</li>
                                <li>Basta madami</li>
                            </ul>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-title ><span class="font-weight-black">Hobbies</span> </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <ul class="ml-3">
                                <li>Playing Guitar</li>
                                <li>Filming</li>
                                <li>Photography</li>
                                <li>Sleeping</li>
                                <li>Watching Movies</li>
                                <li>Playing online games with my friends</li>
                                <li>Basta madami</li>
                            </ul>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
        </v-expansion-panels>
        <v-card color="rgb(255, 255, 255, 0.2)" class="pa-3 mt-5">
        <div class="text-h3 font-weight-medium text-center text-white">My Gallery</div>
        </v-card>
        <br>

        <!--Gallery Carousel-->

        
            <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="image in images"
            :src="image.src"
            cover
            ></v-carousel-item>
        </v-carousel>
        
        <br>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

//Gallery Images Array for Carousel
const images = ref([
            {
            src: 'https://cdn.discordapp.com/attachments/1017009278445432862/1017764095086301274/cover.jpg',
            },
            {
            src: 'https://cdn.discordapp.com/attachments/1017009278445432862/1017763136184524830/me.png',
            },
           
            {
            src: 'https://cdn.discordapp.com/attachments/1017009278445432862/1018726806355984424/fms.png',
            },
                ])
</script>