<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <div v-if="failCheck()" class="text-h4 font-weight-bold text-green-lighten-1">Congratulations!
                <br>
                <span class="text-body-1 font-weight-black">You passed the quiz.</span>
            </div>
              <div v-else class="text-h4 font-weight-bold text-red-darken-3">You Failed!
                <br>
                <span class="text-body-1 font-weight-black">It's ok! Do your best next time</span>
              </div>
            </div>
  
              <div id="score" class="pa-2 mb-3 mt-2 bg-grey-lighten-1 rounded">
                <span class="font-weight-bold">
                  {{
                    Math.floor(
                      (score.correctlyAnsweredQuestions / score.allQuestions) *
                        100
                    )
                  }}
                  %
                </span>
                of your answers are correct!
              </div>
  
            <div class="modal-footer">
                <v-row>
                    <v-col>
                        <v-btn
                            id="play-again"
                            class="mt-3 bg-green-lighten-2 font-weight-bold"
                            height="45"
                            @click="$emit('reload')"
                        >
                            Try Again
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      header: String,
      subheader: String,
      score: Object,
    },

    methods: {
        failCheck(){
            if(this.score.correctlyAnsweredQuestions < 5){
                return false;
            }
            else return true;
            
        }
    }
  };
  </script>
  
  <style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 90vw;
    max-width: 650px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
  
  .modal-header {
    text-align: center;
  }
  
  .modal-header h2 {
    color: rgb(0, 178, 72);
  }
  
  .modal-header h3 {
    color: rgb(0, 178, 72);
  }
  
  .modal-body {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    line-height: 3rem;
  }
  
  .modal-body > * {
    margin: 1rem 0;
    padding: 0.25rem 0.5rem;
  }
  
  .modal-footer {
    display: flex;
    justify-content: space-between;
  }
  
  /*
   Modal Transition
   */
  
  .modal-enter {
    opacity: 0;
  }
  
  .modal-leave-active {
    opacity: 0;
  }
  
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  
  .button-footer {
    padding: 1rem 2rem;
    background: linear-gradient(
      210deg,
      rgba(187, 0, 47, 0.8),
      rgba(245, 0, 87, 0.6)
    );
    border-radius: 7px;
    border: none;
  }
  
  .anchor-footer {
    color: black;
    text-decoration: none;
    cursor: default;
  }
  
  .button-footer:active,
  .button-footer:focus {
    outline: none;
  }
  
  .button-footer:hover {
    transform: scale(1.02);
  }
  
  .highlight {
    border-radius: 4px;
    background-color: rgba(187, 0, 47, 0.3);
    padding: 0.25rem 0.5rem;
  }
  
  #score {
    box-shadow: 2px 3px 4px gray;
  }
  
  #chooseCategory {
    text-align: center;
  }
  </style>