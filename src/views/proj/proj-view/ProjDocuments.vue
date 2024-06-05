<template>
  <div class="doc-wrap">
    <!-- doc body -->
    <div class="doc-body">
      <sort-filter title="All Project Files"/>

      <div class="all-files">
        
        <!-- folder-wrap -->
        <template v-if="showAllFiles">
          <div 
          class="each-file" 
          v-for="(docData,index) in docDataArray"
          :key="index"
          @mouseenter="docHovered(index)"
          @mouseleave="docUnhovered">

            <!-- folder -->
            <router-link :to="{name: 'folder'}" class="img-view">
              <div>
              
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

            <!-- details and download -->
            <div class="details-download">

              <div class="name-date">
                <h3 class="file-name">{{docData.folderName}}</h3>
                <div class="folder-date">
                  <p>Folder •</p>
                  <p>{{docData.folderDate}}</p>
                </div>
              </div>

              <span class="material-symbols-outlined doc-icons"
              v-show="hoveredIndex === index">
                download
              </span>
            </div>

          </div>
        </template>

        <template v-else>
          <router-view/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex'

const SortFilter= defineAsyncComponent(() => import('@/components/SortFilter.vue'));


export default {
  name: 'Documents',

  components: { SortFilter },

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
  .doc-wrap {
    @apply mx-auto;

    .doc-body{
      @apply flex flex-col gap-6 justify-start items-start h-full  p-6; 

      .all-files {
        @apply p-2 grid grid-cols-4 gap-10 h-full w-full;

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

</style>