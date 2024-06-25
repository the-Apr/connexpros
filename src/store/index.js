import { createStore } from 'vuex'

import formValid from './formValid';
import auth from './auth';
import documentPanel from './panelData/documentPanel';
import document from './document';
import project from './project'

export default createStore({

  modules: {
    formValid,
    auth,
    documentPanel,
    document,
    project
  },

  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
})
