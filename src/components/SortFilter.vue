<template>
  <div class="files-view-sort">
    <h3>{{ title || '' }}</h3>

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
</template>

<script>
export default {
  name: 'SortFilter',

  props: {
    title: {
      type: String,
      required: false
    }
  }

}
</script>

<style lang='scss' scoped>
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

        p{
          @apply text-sm;
        }
      }

      span {
        @apply text-sm;

        @screen lg {
          @apply text-base;
        }
      }
    }
  }
</style>