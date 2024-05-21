<template>
  <div class="document-wrap">
    <nav-header/>

    <!-- doc body -->
    <div class="doc-body">
      <div class="files-view-sort">
        <h3>All Files</h3>
        <p>Sort</p>
      </div>

      <div class="all-files">

        <div class="each-file">
          <div class="img-view">
            <fa-icon :icon="['fas', 'folder']" class="folder-icon"/>
          </div>

          <div class="name-date">
            <h3 class="file-name">Vehicles</h3>
            <div class="folder-date">
              <p>Folder</p>
              <p>19/04/24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const NavHeader = defineAsyncComponent(() => import('@/components/NavHeader.vue'));

export default {
  name: 'Documents',
  components: { NavHeader },

}
</script>

<style lang='scss' scoped>
.document-wrap{
  @apply col-span-4 text-black;

  .doc-body{
    @apply flex flex-col gap-6 justify-start items-center h-full w-full p-14; 

    .files-view-sort{
      @apply w-full flex flex-row justify-between items-center;

      h3 {
        @apply text-base font-medium tracking-wide;
      }
    }

    .all-files {
      @apply p-2 grid grid-cols-3 gap-6 h-full;

      .each-file {
        @apply flex flex-col gap-4 w-[300px] h-[400px];

        .img-view {
          @apply bg-[#F4E9D7] flex justify-center items-center h-5/6 rounded-xl;

          .folder-icon {
            @apply text-[#DCBC86] w-[70px] h-[80px];
          }
        }

        .name-date {
          @apply h-1/6 flex flex-col gap-1 items-start ;

          .file-name {
            @apply text-sm tracking-wide font-medium;
          }

          .folder-date {
            @apply flex flex-row gap-1;
          }
        }
      }
    }
  }
}
</style>