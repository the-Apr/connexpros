import { createStore } from 'vuex'

import formValid from './formValid';
import auth from './auth';
import documentPanel from './panelData/documentPanel';
import document from './document';
import project from './project';
import billings from './billings';

export default createStore({

  modules: {
    formValid,
    auth,
    documentPanel,
    document,
    project,
    billings
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
