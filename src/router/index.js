import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue';

const Login =  () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue');
const ResetPassword =  () => import(/* webpackChunkName: "reset-password" */ '@/views/auth/ResetPassword.vue');
const Dashboard =  () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue');
const Documents =  () => import(/* webpackChunkName: "documents" */ '../views/Documents.vue');

const routes = [
  {
    path: '/', 
    redirect: '/dashboard'
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
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard'
    },
  },

  {
    path: '/document',
    name: 'doc',
    component: Documents,
    meta: {
      title: 'Documents'
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
