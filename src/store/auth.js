import router from '../router/index';

export default {

  namespaced: true,

  state: {
    token: null
  },

  getters: {
    GET_TOKEN(state) {
      return state.token;
    },

    IS_AUTH(state) {
      return !!state.token;
    }
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },

  actions: {
    async ASSIGN_TOKEN({ commit }) {
      const token = localStorage.getItem('authToken');
      commit('SET_TOKEN', token)

      setInterval(() => {
        if (isTokenExpired(state.token)) {
          
          commit('SET_TOKEN', null);
          
          router.push({ name: 'login' });
        }
      }, 60000);
    }
  },
}