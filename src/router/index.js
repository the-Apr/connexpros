import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue';

const Login =  () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue');
const ResetPassword =  () => import(/* webpackChunkName: "reset-password" */ '@/views/auth/ResetPassword.vue');
const Dashboard =  () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue');
const Documents =  () => import(/* webpackChunkName: "documents" */ '../views/Documents.vue');
const Folder =  () => import(/* webpackChunkName: "folder" */ '../views/FolderWrap.vue');
const Test =  () => import(/* webpackChunkName: "test" */ '../views/TestScreen.vue');

const routes = [

  // {
  //   path: '/:catchAll(.*)',
  //   name: NotFound
  // },

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
    },
    children: [
      {
        path: '/test',
        name: 'test',
        component: Test,
      },
      {
        path: '/folder',
        name: 'folder',
        component: Folder,
      }
    ]
  },
  
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
