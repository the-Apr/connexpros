
export default {

  namespaced: true,

  state: {
    documentDataArray: [
      {
        folderName: 'Vehicles',
        folderDate: '19/02/24'
      },
      {
        folderName: 'Bank Statement',
        folderDate: '16/02/24'
      },
      {
        folderName: 'Equipments',
        folderDate: '18/02/24'
      },
      {
        folderName: 'Receipts',
        folderDate: '19/02/24'
      },
    ]
  },

  getters: {
    DOCUMENT_DATA_ARRAY(state){
      return state.documentDataArray;
    }
  },
  mutations: {
  },
  actions: {
  },
}