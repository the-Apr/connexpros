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

    // VALIDATE_EMPTY_FIELDS({ state }, formData) {
     
    //   const emptyFields = Object.entries(formData)
    //     .filter(([fieldName, value]) => !value)
    //     .map(([fieldName]) => fieldName);

    //   const error = emptyFields.length > 0;

    //   return { emptyFields, error };
    // }

    async VALIDATE_FORM_DATA({ commit }, formData) {
      try {
        const { emptyFields, error } = validateEmptyFields(formData);
        return { emptyFields, error };
      } catch (error) {
        console.error('Validation error:', error);
        throw new Error('Validation failed');
      }
    },
  },

 
}

const validateEmptyFields = (formData) => {
  const emptyFields = [];

  // Helper function to recursively check fields
  const checkFields = (data, path = '') => {
    if (Array.isArray(data)) {
      
      // If data is an array, iterate through each item
      data.forEach((item, index) => {
        checkFields(item, `${path}[${index}]`);
      });
    } else if (typeof data === 'object' && data !== null) {

      // If data is an object, iterate through its keys
      Object.entries(data).forEach(([key, value]) => {
        const fieldPath = path ? `${path}.${key}` : key;
        if (!value) {
          emptyFields.push(fieldPath);
        } else {
          checkFields(value, fieldPath);
        }
      });
    }
  };

  // Start checking from the top-level formData
  checkFields(formData);

  const error = emptyFields.length > 0;
  return { emptyFields, error };
};