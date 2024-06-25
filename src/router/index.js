import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index';

const routes = [
  
  //test
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../components/MODAL/AddMilestone.vue'),
    //component: () => import(/* webpackChunkName: "test" */ '../views/TestScreen.vue'),
  },

  // not found
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component:  () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
    meta: {
      title: 'Not Found'
    }
  },

  // redirect
  {
    path: '/', 
    redirect: '/dashboard'
  },

  // sign-up
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import(/* webpackChunkName: "sign-up" */ '@/views/auth/CreateAccount.vue'),
    meta: {
      title: 'Sign Up'
    }
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
      title: 'Dashboard',
      //requiresAuth: true
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
        //redirect: 'summary',
        component: () => import(/* webpackChunkName: "clientproject" */ '../components/Projects/each-proj/EachProject.vue'),
        meta: {
          title: 'Client'
        },
        redirect: { name: 'summary' },
    
        children: [
          {
            path: 'summary',
            name: 'summary',
            component: () => import(/* webpackChunkName: "summary" */ '../views/proj/proj-view/Summary.vue')
          },
          {
            path: 'milestone',
            name: 'milestone',
            component: () => import(/* webpackChunkName: "milestone" */ '../views/proj/proj-view/Milestone.vue'),
          },
          {
            path: 'transaction',
            name: 'transaction',
            component: () => import(/* webpackChunkName: "transaction" */ '../views/proj/proj-view/Transation.vue'),
          },
          {
            path: 'documents',
            name: 'documents',
            component: () => import(/* webpackChunkName: "documents" */ '../views/proj/proj-view/ProjDocuments.vue'),
          },
          {
            path: 'reports',
            name: 'reports',
            component: () => import(/* webpackChunkName: "reports" */ '../views/proj/proj-view/Report.vue'),
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
        path: 'folder',
        name: 'folder',
        component: () => import(/* webpackChunkName: "subfolder" */ '../views/doc/SubFolders.vue'),
      }
    ]
  },

  //TAsks
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import(/* webpackChunkName: "tasks" */ '../views/Tasks.vue'),
    meta: {
      title: 'Tasks'
    },
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} | ConnexPros`;

  store.commit('auth/SET_LOADING', true);

  const isAuthenticated = store.getters['auth/IS_AUTH'];

  console.log(isAuthenticated)

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    store.commit('auth/SET_LOADING', false);
    next({ name: 'login' });
  } else {
    if (to.name === 'not-found') {
      store.commit('auth/SET_NOT_FOUND', true); 
    } else {
      store.commit('auth/SET_NOT_FOUND', false); 
    }

    next();
  }
  
});

router.afterEach(() => {
  store.commit('auth/SET_LOADING', false); 
});

export default router
