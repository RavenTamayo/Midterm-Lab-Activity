<template>
    <v-container fluid>
        <div class="text-h3 font-weight-medium mb-4 text-center">About the Apps</div>
        <v-row justify="center" class="mb-4">
            <v-col cols="auto">
                <!--About Math App Card-->
                <v-card
                 max-width="400"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.discordapp.com/attachments/1017009278445432862/1017752278939222086/Simple_Calculator.webp"
                    cover
                    >
                    <v-card-title>Simple Calculator App</v-card-title>
                    </v-img>

                    <v-card-text>
                    <div>A simple calculator app that can compute basic mathematical operations. Made with vuetify components.</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="green" to="/basicMath">
                        Go to App
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <!--About String App card-->
            <v-col cols="auto">
                <v-card
                 max-width="400"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.discordapp.com/attachments/1017009278445432862/1017755568930308166/String_Manipulator.webp"
                    cover
                    >
                    <v-card-title>String Manipulator App</v-card-title>
                    </v-img>

                    <v-card-text>
                    <div>Counts the vowels of your text input, converts it to all upper case, all lowercase, and converts all of the vowels into "*". Made using vuetify components</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="green" to="/stringApp">
                        Go to App
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <!--About Quiz App Card-->
            <v-col cols="auto">
                <v-card
                 max-width="400"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.discordapp.com/attachments/1017009278445432862/1017755568930308166/String_Manipulator.webp"
                    cover
                    >
                    <v-card-title>Quiz App</v-card-title>
                    </v-img>

                    <v-card-text>
                    <div>Counts the vowels of your text input, converts it to all upper case, all lowercase, and converts all of the vowels into "*". Made using vuetify components</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="green" to="/axios">
                        Go to App
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!--2nd Row-->
        <v-row justify="center">
            <!--About Vuetify Card-->
            <v-col cols="auto">
                <v-card
                 max-width="400"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.discordapp.com/attachments/1017009278445432862/1017759382815133816/vuetify.webp"
                    cover
                    >
                    <v-card-title>About Vuetify</v-card-title>
                    </v-img>

                    <v-card-text>
                    <div>Counts the vowels of your text input, converts it to all upper case, all lowercase, and converts all of the vowels into "*". Made using vuetify components</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="green" to="/aboutVuetify">
                        Learn more
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <!--About Me Card-->
            <v-col cols="auto">
                <v-card
                 max-width="400"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.discordapp.com/attachments/1017009278445432862/1017758003354673184/me.webp"
                    cover
                    >
                    <v-card-title>About Raven Tamayo</v-card-title>
                    </v-img>

                    <v-card-text>
                    <div>Counts the vowels of your text input, converts it to all upper case, all lowercase, and converts all of the vowels into "*". Made using vuetify components</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="green" to="/aboutMe">
                        Learn more
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
       
    </v-container>
</template>