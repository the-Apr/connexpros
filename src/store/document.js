export default {

  namespaced: true,

  state: {
   folderDataArray: []
  },

  getters: {
    DOCUMENT_DATA_ARRAY(state){
      return state.folderDataArray;
    }
  },

  mutations: {
    SET_ALL_FOLDERS(state, payload) {
      state.folderDataArray = payload;
    }
  },

  actions: {
    async fetchAllFolders ({commit}) {
      try{

        const response = await this.axios.get('folders');
        response.forEach(async folder => {
          if(!state.folderDataArray.some((folderInfo) => folderInfo.folderId === folder.id)) {
            commit('SET_ALL_FOLDERS', response.data);
          }
        });

        return {}
      } catch (error) {
        const errorMsg = error.response ? error.response.message : "Failed to fetch folders.";
        
        return { error: true, errorMsg };
      }

    },

  }


}