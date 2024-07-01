export default {
  namespaced: true,
  
  state: {
    showInvoiceModal: null,
    showActionModal: null,
    isActionModalActive: null,
  },

  getters: {
    IS_ACT_MOD_ACTIVE(state){
      return state.showActionModal;
    },

    INVOICE_MODAL(state){
      return state.showInvoiceModal;
    }
  },

  mutations: {
    TOGGLE_ACTION_MODAL(state) {
      state.showActionModal = !state.showActionModal;
    },

    TOGGLE_INVOICE(state) {
      state.showInvoiceModal = !state.showInvoiceModal;
    },

    TOGGLE_MODAL_ACTIVE(state) {
      state.modalActive  = !state.modalActive;
    },

    setInvoiceData(state, payload) {
      state.invoiceData.push(payload)
    },
  },
  actions: {
  },
}