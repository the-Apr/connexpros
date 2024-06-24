import { createStore } from 'vuex'

import formValid from './formValid';
import auth from './auth';
import documentPanel from './panelData/documentPanel';
import document from './document';

export default createStore({

  modules: {
    formValid,
    auth,
    documentPanel,
    document
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
