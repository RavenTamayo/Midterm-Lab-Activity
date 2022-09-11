import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import VuetifyView from '../views/VuetifyView.vue'
import AboutMe from '../views/AboutMeView.vue'
import AxiosQuiz from '../views/AxiosView.vue'
import About from '../views/AboutView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasicMathView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/aboutVuetify',
      name: 'aboutVuetify',
      component: VuetifyView
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/axios',
      name: 'axios',
      component: AxiosQuiz
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },

  ]
})

export default router
