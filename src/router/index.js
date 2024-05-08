import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue';

const Login =  () => import(/* webpackChunkName: "login" */ '@/views/Login.vue');
const ResetPassword =  () => import(/* webpackChunkName: "reset-password" */ '@/components/ResetPassword.vue');

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
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
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
