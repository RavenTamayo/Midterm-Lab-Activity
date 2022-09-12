<template>
    <v-container fluid>
        <v-card color="rgb(255, 255, 255, 0.2)" class="px-5 py-8 ">
        <v-divider class="mt-2 mb-3 mx-8" color="white"></v-divider>
        <div class="text-h3 font-weight-medium mb-3 text-center text-white">About the Apps</div>
        <v-divider class="mt-2 mb-8 mx-8" color="white"></v-divider>
        <v-row justify="space-around" class="mb-4">
            <v-col cols="auto">
                <!--About Math App Card-->
                <v-card
                 max-width="400"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.discordapp.com/attachments/1017009278445432862/1018577688543379577/calc.webp"
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
                    src="https://media.discordapp.net/attachments/1017009278445432862/1018577688291725422/texts.webp?width=994&height=559"
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
                    src="https://media.discordapp.net/attachments/1017009278445432862/1018577688811810846/quiz.webp?width=868&height=559"
                    cover
                    >
                    <v-card-title>Quiz App</v-card-title>
                    </v-img>

                    <v-card-text>
                    <div>A simple quiz app with question from the Open Trivia Database. Try your best to answer the questions and get a passing score.</div>
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
                    src="https://cdn.discordapp.com/attachments/1017009278445432862/1018578158070542356/vuetify.webp"
                    cover
                    >
                    <v-card-title>About Vuetify</v-card-title>
                    </v-img>

                    <v-card-text>
                    <div>Explore and learn more about Vuetify how it's used, who created it, what makes it great for website development.Click the button below to learn more.</div>
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
                    src="https://cdn.discordapp.com/attachments/1017009278445432862/1018578556990799902/me.webp"
                    cover
                    >
                    <v-card-title>About Raven Tamayo</v-card-title>
                    </v-img>

                    <v-card-text>
                    <div>Learn more about me, Raven Tamayo and the things I like doing, things I like and more. Click the button below to to explore. </div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="green" to="/aboutMe">
                        Learn more
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    </v-container>
</template>