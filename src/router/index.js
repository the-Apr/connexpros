import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  // not found
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component:  () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
  },

  // redirect
  {
    path: '/', 
    redirect: '/dashboard'
  },

  // login
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue'),
    meta: {
      title: 'Login'
    }
  },

  // reset-password
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import(/* webpackChunkName: "reset-password" */ '@/views/auth/ResetPassword.vue'),
    meta: {
      title: 'Reset Password'
    }
  },

  // dashboard
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
      title: 'Dashboard'
    },
  },

  // projects
  {
    path: '/projects',
    name: 'proj',
    component: () => import(/* webpackChunkName: "projects" */ '../views/proj/Projects.vue'),
    meta: {
      title: 'Projects'
    },

    children: [
      // client project
      {
        path: 'client-proj',
        name: 'client-proj',
        component: () => import(/* webpackChunkName: "clientproject" */ '../components/Projects/each-proj/EachProject.vue'),
        meta: {
          title: 'Client'
        },
    
        children: [
          {
            path: 'summary',
            name: 'summary',
            component: () => import(/* webpackChunkName: "summary" */ '../views/proj/proj-view/Summary.vue')
          },
          {
            path: 'milestones',
            name: 'milestones',
            component: () => import(/* webpackChunkName: "summary" */ '../views/proj/Projects.vue'),
          },
    
        ]
      },
    ]
  },


  // document
  {
    path: '/document',
    name: 'doc',
    component:  () => import(/* webpackChunkName: "documents" */ '../views/doc/Documents.vue'),
    meta: {
      title: 'Documents'
    },
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import(/* webpackChunkName: "test" */ '../views/TestScreen.vue'),
      },
      {
        path: 'folder',
        name: 'folder',
        component: () => import(/* webpackChunkName: "subfolder" */ '../views/doc/SubFolders.vue'),
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
