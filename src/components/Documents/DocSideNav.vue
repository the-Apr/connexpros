<template>
  <div class="side-nav">
    <div class="top">

      <div class="search">
       <span class="material-symbols-outlined search-icon">
          search
        </span>

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
  @apply max-w-[250px] h-full w-full flex flex-col divide-y-2 text-[#515252]; 

  p{
    @apply text-[#515252] text-sm font-medium;

    @screen lg {
      @apply text-base;
    }
  }

  span{
    @apply text-sm;

    @screen lg {
      @apply text-base;
    }
  }



  .top {
    @apply flex flex-col gap-3 p-3;

    @screen lg {
      @apply p-5
    }

    .search {
      @apply w-full flex justify-center items-center relative mb-2;

      .search-icon{
      @apply left-[14px] top-[10px] absolute text-[#979797] text-lg;
      }

      input{
        @apply accent-[#00ABF1] shadow-sm ring-1 ring-inset ring-gray-300 outline-none text-black w-full;
        background-color: #f2f7f6;
        padding: 10px 9px 10px 44px;
        border: none;
        border-radius: 10px;

        &::placeholder {
          @apply text-[#033549] opacity-45 text-[12px] text-left font-normal;

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
    @apply flex flex-col justify-between items-start gap-5 p-3 h-full;

    @screen lg {
      @apply p-5
    }

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
        @apply flex flex-row gap-3 p-2 justify-center items-center bg-[#104438] w-full text-white;

        &:hover{
          @apply opacity-90;
        }

        @screen lg {
          @apply px-4 py-4
        }

        .btn-icon{
          @apply text-lg;

          @screen lg{
            @apply text-xl;
          }
        }


        .btn-title {
          @apply uppercase font-medium text-sm;

          @screen lg {
            @apply font-semibold text-base
          }
        }
      }
    }
  }
}
</style>