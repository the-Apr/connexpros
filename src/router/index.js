import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import about from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    
    redirect: '/login'
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },

  {
    path: '/about',
    name: 'about',
    component: about,
    meta: {
      title: 'Login'
    }
  },

  {
    path: '/reset-password',
    name: 'reset-password',
    
    component: () => import(/* webpackChunkName: "reset-password" */ '../components/ResetPassword.vue'),
    meta: {
      title: 'Reset Password'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | ConnexPros`;
  
  next();
})

export default router
