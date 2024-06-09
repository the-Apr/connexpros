<template>
  <div class="side-nav">
    <div class="top">

      <div class="search">
       <fa-icon :icon="['fas', 'magnifying-glass']" class="icon" />

        <input 
          type="text" 
          placeholder="Search for transaction" 
        >
      </div>

      <div class="star-recent">
        <span class="material-symbols-outlined">
          grade
        </span>
        <p>Starred</p>
      </div>

      <div class="star-recent">
        <span class="material-symbols-outlined">
          history
        </span>
        <p>Recent</p>
      </div>
    </div>

    <div class="bottom">
      <div class="all-files">
        <div class="folder">
          <span class="material-symbols-outlined">
            keyboard_arrow_down
          </span>
          <span class="material-symbols-outlined">
            folder
          </span>
          <p> Vehicles</p>
        </div>
      </div>

      <div class="add-upload">
        <button class="btn"  
        v-for="(item, index) in 2" 
        :key="index"
        :class="{ 'bg-different' : index === 1 }">
          
          <span class="material-symbols-outlined btn-icon">
            {{ index === 0 ? 'add_circle' : 'upload' }}
          </span>
          
          <h3 class="btn-title">
            {{ index === 0 ? 'add folder' : 'upload file' }}
          </h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocSideNav',

}
</script>

<style lang='scss' scoped>
.side-nav {
  @apply w-1/4 h-full flex flex-col gap-5 divide-y-2 text-[#515252]; 

  p{
    @apply text-[#515252] text-base font-medium;
  }



  .top {
    @apply flex flex-col gap-7 p-5;

    .search {
      @apply w-full flex justify-center items-center relative;

      .icon{
      @apply h-[18px] left-[15px] top-[16px] absolute text-[#979797];
      }

      input{
        @apply accent-[#00ABF1] shadow-sm ring-1 ring-inset ring-gray-300 outline-none text-black w-full;
        background-color: #f2f7f6;
        padding: 13px 9px 13px 44px;
        border: none;
        border-radius: 10px;

        &::placeholder {
          @apply text-[#033549] opacity-45 text-[11px] text-left font-normal;

          @screen md {
            @apply text-sm;
          }
        }

        &:focus {
        @apply ring-2 ring-inset ring-[#00ABF1] transition ease-in-out duration-500;
        }

      }
    }

    .star-recent {
      @apply flex flex-row gap-3 justify-start items-center;

      span{
        @apply text-[#141515];
      }

    }
  }

  .bottom {
    @apply flex flex-col justify-between items-start gap-5 p-5 h-full;

    .all-files {
      @apply flex flex-col gap-2 justify-center items-center;

      .folder {
        @apply flex flex-row gap-2 items-center justify-start;
      }
    }

    .add-upload {
      @apply flex flex-col gap-3 justify-center items-center w-full;

      .bg-different {
        background-color: #DCBC86 !important;
      }

      .btn {
        @apply flex flex-row gap-3 px-4 py-4 justify-center items-center bg-[#104438] w-full text-white;


        .btn-title {
          @apply uppercase font-semibold text-base;
        }
      }
    }
  }
}
</style>