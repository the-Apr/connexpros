<template>
  <div 
  class="each-file" 
  @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave">

    <!-- folder -->
    <router-link :to="{name: 'folder'}" class="img-view">
      <div>
      
        <fa-icon :icon="['fas', 'folder']" class="folder-icon"/>

        <div class="star-dots" v-show="isHovered">
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
      v-show="isHovered">
        download
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BaseDocument',

  props: {
    docData: {
      type: Object,
      required: true
    },
    isHovered: {
      type: Boolean,
      required: true
    },
    onMouseEnter: {
      type: Function,
      required: true
    },
    onMouseLeave: {
      type: Function,
      required: true
    }
  },

  methods: {

  }

}
</script>

<style lang='scss' scoped>
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
</style>