export default {

  namespaced: true,

  state: {
   folderDataArray: [],

   filesInFolderArray: []
  },

  getters: {
    PARENT_FOLDER_ARRAY(state){
      return state.folderDataArray;
    }
  },

  mutations: {
    SET_PARENT_FOLDERS(state, payload) {
      state.folderDataArray = payload;
    },
    SET_FILES_IN_FOLDER(state, payload) {
      state.folderDataArray = payload;
    },
  },

  actions: {
    async FETCH_PARENT_FOLDERS ({commit}) {
      try{

        const response = await this.axios.get('parent-files');
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

    async FETCH_FILES_IN_FOLDER () {
      try{

        const response = await this.axios.get('folders/1/files');
        response.forEach(async folder => {
          if(!state.filesInFolderArray.some((fileInfo) => fileInfo.fileId === file.id)) {
            commit('SET_FILES_IN_FOLDER', response.data);
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