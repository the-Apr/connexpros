<template>
  <div class="document-wrap">
    <nav-header/>

    <div class="full-body">

      <!-- doc body -->
      <div class="doc-body">
        <div class="files-view-sort">
          <h3>All Files</h3>

          <div class="sort-view">
            <div class="sort">
              <span class="material-symbols-outlined">
                sort
              </span>
              <p>Sort</p>
              <span class="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </div>
            <div class="view">
              <span class="material-symbols-outlined">
                grid_view
              </span>
              <span class="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        <div class="all-files">
          
          <!-- folder-wrap -->
          <!-- <div 
          class="each-file" 
          v-for="(docData,index) in docDataArray"
          :key="index">

            folder
            <router-link :to="{name: 'test'}" class="img-view">
              <div 
             
              @mouseenter="docHovered(index)"
              @mouseleave="docUnhovered">
              
                <fa-icon :icon="['fas', 'folder']" class="folder-icon"/>

                <div class="star-dots" v-show="hoveredIndex === index">
                  <span class="material-symbols-outlined doc-icons">
                    grade
                  </span>
                  <span class="material-symbols-outlined doc-icons">
                    more_vert
                  </span>
                </div>
              </div>
            </router-link>

            details and download
            <div class="details-download">

              <div class="name-date">
                <h3 class="file-name">{{docData.folderName}}</h3>
                <div class="folder-date">
                  <p>Folder •</p>
                  <p>{{docData.folderDate}}</p>
                </div>
              </div>

              <span class="material-symbols-outlined doc-icons">
                download
              </span>
            </div>

          </div> -->

          <router-view/>
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
import FolderWrap from './FolderWrap.vue';

const NavHeader = defineAsyncComponent(() => import('@/components/Panel/NavHeader.vue'));
const DocSideNav  = defineAsyncComponent(() => import('@/components/Documents/DocSideNav.vue'));

export default {
  name: 'Documents',
  components: { NavHeader, DocSideNav, FolderWrap },

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
.document-wrap{
  @apply col-span-4 text-black h-full flex flex-col;

  .full-body{
    @apply flex flex-row gap-3 divide-x-2 grow;

    .doc-body{
      @apply flex flex-col gap-6 justify-start items-start h-full w-4/5 p-14; 

      .files-view-sort{
        @apply w-full flex flex-row justify-between items-center px-2;

        h3 {
          @apply text-lg font-medium tracking-wide;
        }

        .sort-view {
          @apply flex flex-row gap-8 justify-center items-center;

          .view,
          .sort{
            @apply flex flex-row gap-1;
          }
        }
      }

      .all-files {
        @apply p-2 grid grid-cols-4 gap-10 h-full w-full;

        // .each-file {
        //   @apply flex flex-col gap-4 max-w-[300px] h-[300px];

        //   .doc-icons {
        //     @apply text-[30px] font-extralight text-[#141515];
        //   }

        //   .img-view {
        //     @apply bg-[#F4E9D7] flex justify-center items-center h-5/6 rounded-xl relative;

        //     &:hover {
        //       @apply bg-[#EAE0CE]
        //     }

        //     .folder-icon {
        //       @apply text-[#DCBC86] w-[70px] h-[80px];
        //     }

        //     .star-dots{
        //       @apply flex flex-row gap-3 p-1 absolute top-4 right-4;
        //     }
        //   }

        //   .details-download {
        //     @apply h-1/6 flex flex-row justify-between items-center;

        //     .name-date {
        //       @apply  flex flex-col gap-1 items-start ;

        //       .file-name {
        //         @apply text-base tracking-wide font-medium;
        //       }

        //       .folder-date {
        //         @apply flex flex-row gap-1;
        //       }
        //     }
        //   }

        // }
      }
    }
  }
}
</style>