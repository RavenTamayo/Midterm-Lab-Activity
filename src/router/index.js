import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import VuetifyView from '../views/VuetifyView.vue'
import AboutMe from '../views/AboutMeView.vue'
import AxiosQuiz from '../views/AxiosView.vue'
import About from '../views/AboutView.vue'
import Register from '../views/RegisterView.vue'
import Login from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import {getAuth, onAuthStateChanged } from 'firebase/auth'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasicMathView,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView,
      meta:{
        requiresAuth:true
      }
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView,
    meta:{
      requiresAuth:true
    }
    },
    {
      path: '/aboutVuetify',
      name: 'aboutVuetify',
      component: VuetifyView
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMe,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/axios',
      name: 'axios',
      component: AxiosQuiz,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },

  ]
})
const getCurrentUser = () => {
  return new Promise((resolve,reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async(to, from, next) =>{
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert ("You Don't have access to this page! Please try logging in first")
      next("/login");
    }
  }else 
    next();
});
export default router
