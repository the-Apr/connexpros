import router from '../router/index';

export default {

  namespaced: true,

  state: {
    notFound: false,
    token: null,
    globalLoading: null,
  },

  getters: {

    GET_TOKEN(state) {
      return state.token;
    },

    IS_AUTH(state) {
      return !!state.token;
    },

    IS_LOADING(state) {
      return state.globalLoading;
    },
  },

  mutations: {
    SET_NOT_FOUND(state, value) {
      state.notFound = value;
    },

    SET_TOKEN(state, token) {
      state.token = token
    },

    SET_LOADING(state, loading) {
      state.globalLoading = loading;
    },
  },

  actions: {
    async ASSIGN_TOKEN({ commit }) {
      const token = localStorage.getItem('authToken');

      if (token) {
        commit('SET_TOKEN', token);
      }

      commit('SET_LOADING', false);

      setInterval(() => {
        if (isTokenExpired(state.token)) {
          
          commit('SET_TOKEN', null);
          localStorage.clearItem('authToken');
          
          router.push({ name: 'login' });
        }
      }, 60000);
    }
  },
}