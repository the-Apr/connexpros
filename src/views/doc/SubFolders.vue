<template>
  <!-- folder-wrap -->
  <base-document
    v-for= "(docData, index) in docDataArray" 
    :key= "index" 
    :docData= "docData" 
    :isHovered= "hoveredIndex === index"
    :onMouseEnter= "() => docHovered(index)"
    :onMouseLeave= "docUnhovered"
  />

</template>

<script>
import BaseDocument from '@/components/BaseDocument.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'SubFolders',

  components: { BaseDocument },

  data () {
    return {
      hoveredIndex: null,
    }
  },

  computed: {
    ...mapGetters('documentPanel', ['DOCUMENT_DATA_ARRAY']),

    docDataArray() {
      return this.DOCUMENT_DATA_ARRAY;
    }
  },

  methods: {
    docHovered(index) {
      this.hoveredIndex = index;
    },

    docUnhovered() {
      this.hoveredIndex = null;
    }
  }

}
</script>

<style lang='scss' scoped>
  
</style>