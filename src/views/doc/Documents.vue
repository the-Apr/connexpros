<template>
  <div class="document-wrap">
    <nav-header/>

    <div class="full-body">

      <!-- doc body -->
      <div class="doc-body">
       <sort-filter title= "All Files"/>

        <div class="all-files">
          
          <!-- folder-wrap -->
          <template v-if="showAllFiles">

            <base-document
            v-for="(docData, index) in docDataArray" 
            :key="index" 
            :docData="docData" 
            :isHovered="hoveredIndex === index"
            :onMouseEnter="() => docHovered(index)"
            :onMouseLeave="docUnhovered"
            />
            
          </template>

          <template v-else>
            <router-view/>
          </template>
        </div>
      </div>

      <!-- side-nav -->
      <doc-side-nav/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex'
import FolderWrap from './SubFolders.vue';
import SortFilter from '@/components/SortFilter.vue';
import BaseDocument from '@/components/BaseDocument.vue';

const NavHeader = defineAsyncComponent(() => import('@/components/Panel/NavHeader.vue'));
const DocSideNav  = defineAsyncComponent(() => import('@/components/Documents/DocSideNav.vue'));

export default {
  name: 'Documents',
  components: { NavHeader, DocSideNav, FolderWrap, SortFilter, BaseDocument },

  data () {
    return {
      hoveredIndex: null,
    }
  },

  computed: {
    ...mapGetters('documentPanel', ['DOCUMENT_DATA_ARRAY']),

    docDataArray() {
      return this.DOCUMENT_DATA_ARRAY;
    },

    showAllFiles() {
      return !this.$route.name.includes('folder');
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
.document-wrap{
  @apply col-span-5 text-black h-full flex flex-col;

  @screen lg {
    @apply col-span-4
  }

  .full-body{
    @apply flex flex-row gap-3 divide-x-2 grow;

    .doc-body{
      @apply flex flex-col gap-6 justify-start items-start h-full w-3/4 p-14; 

      .all-files {
        @apply p-2 grid grid-cols-3 gap-8 w-full;

        @screen xl{
          @apply grid-cols-4;
        }

        .each-file {
           @apply flex flex-col gap-4 max-w-[300px] h-[300px];

           .doc-icons {
             @apply text-[20px] font-extralight text-[#141515];
           }

           .img-view {
             @apply bg-[#F4E9D7] flex justify-center items-center h-5/6 rounded-xl relative;

            &:hover {
               @apply bg-[#EAE0CE]
             }

             .folder-icon {
               @apply text-[#DCBC86] w-[70px] h-[80px];
             }

             .star-dots{
               @apply flex flex-row gap-2 p-1 absolute top-3 right-3;
             }
           }

           .details-download {
             @apply h-1/6 flex flex-row justify-between items-center;

             .name-date {
               @apply  flex flex-col gap-1 items-start ;

               .file-name {
                 @apply text-base tracking-wide font-medium;
               }

               .folder-date {
                 @apply flex flex-row gap-1;
               }
             }
           }

         }
      }
    }
  }
}
</style>