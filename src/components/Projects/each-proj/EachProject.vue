<template>
  <div class="each-project">
    <div class="each-proj-wrap">
      <div class="each-header">
        <div class="proj-name">
          <span class="material-symbols-outlined">
            arrow_back
          </span>
          <h2>Bungalow Construction Project</h2>
        </div>

        <div class="status">
          <p>In Progress</p>

        </div>
      </div>

      <div class="details">
        <div class="desc">
          <p class="title">Description</p>
          <p class="info">lorem ipsum dolor amet si le papee derey tin mo</p>
        </div>

        <div class="date-wrap">
          <div class="desc">
            <p class="title">Description</p>
            <p class="info">lorem ipsum dolor amet si </p>
          </div>
          <div class="desc">
            <p class="title">Description</p>
            <p class="info">lorem ipsum dolor amet si </p>
          </div>
        </div>

        <div class="date-wrap">
          <div class="desc">
            <p class="title">Description</p>
            <p class="info">lorem ipsum dolor amet si </p>
          </div>
          <div class="desc">
            <p class="title">Description</p>
            <p class="info">lorem ipsum dolor amet si</p>
          </div>
        </div>
      </div>

      <!-- project nav -->
      <div class="proj-display">
        <each-nav />
        
        <div class="proj-body">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import EachNav from './EachNav.vue'

export default {
  name: 'EachProject',

  components: {
    EachNav,
  }

}

</script>

<style lang='scss' scoped>
.each-project {
  @apply mx-auto col-span-4 w-full bg-[#F7F8F8];

  .each-proj-wrap {
    @apply flex flex-col gap-10 justify-center items-center p-6;

    .each-header{
      @apply flex flex-row w-full justify-between items-center;

      .proj-name{
        @apply flex flex-row gap-6 items-center;
      }

      .status {
        @apply border flex flex-row py-3 px-4 gap-2;
      }
    }

    .details{
      @apply grid grid-cols-3 gap-8  mb-8;

      .desc{
        @apply flex flex-row justify-center items-center h-full;

        .title {
          @apply bg-[#E6E6E6] px-5 py-3 h-full flex justify-center items-center;

        }
        .info{
          @apply bg-[#F2F2F2] px-5 py-3 h-full flex justify-center items-center;
        }
      }

      .date-wrap {
        @apply flex flex-col justify-center items-center divide-y-2 divide-white;
      }
    }

    .proj-display {
      @apply w-full h-full p-6 bg-white rounded-2xl flex flex-col  divide-y-2 overflow-scroll;

      .proj-body {
        @apply py-8;
      }
    }
 
  }
}

</style>