export default {
  namespaced: true,

  state: {
    windowWidth: null,
    mobile: null,
    mobileNav: null,
  },

  mutations: {
    setWindowWidth(state, width) {
      state.windowWidth = width;
    },
    setMobile(state, value) {
      state.mobile = value;
    },
  },

  getters: {
    MOBILE(state) {
      return state.mobile;
    },
    MOBILE_NAV(state) {
      return state.mobileNav;
    }
  },

  actions: {
    CHECK_SCREEN({ commit }) {
      const windowWidth = window.innerWidth;
      commit('setWindowWidth', windowWidth);
      if (windowWidth <= 980) {
        commit('setMobile', true);
      } else {
        commit('setMobile', false);
      }
    },
    
    // VALIDATE_DATA_INPUT({ commit }, payload) {

    //   const  { event, formData, property, regex } = payload;
      
    //   formData[property] = event.target.value.replace(regex, '');
    // },

    VALIDATE_EMPTY_FIELDS({ state }, formData) {
     
      const emptyFields = Object.entries(formData)
        .filter(([fieldName, value]) => !value)
        .map(([fieldName]) => fieldName);

      const error = emptyFields.length > 0;

      return { emptyFields, error };
    }
  },

 
}