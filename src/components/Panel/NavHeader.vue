<template>
<div class="nav-header-wrap">
   
  <!-- nav header -->
  <div class="nav-header">
    <h2>{{title}}</h2>

    <div class="nav-details">

      <fa-icon :icon="['fas', 'bell']" class="bio-icon" />

      <div class="search">
        
       <fa-icon :icon="['fas', 'magnifying-glass']" class="icon" />

        <input 
          type="text" 
          placeholder="Search for transaction,items,etc" 
        >
        
      </div>

    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Dashboard',

  props: {
    title: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
.nav-header-wrap {
  @apply col-span-4 bg-[#F7F8F8];

  .nav-header {
    @apply flex flex-row gap-4 justify-between items-center px-10 border-b-2 border-[#EAEBEB] h-[90px];

    h2{
      @apply text-lg font-bold text-[#15202C];
    }

    .nav-details {
      @apply flex flex-row gap-4 items-center content-center;

      .bio-icon {
        @apply w-9 h-7 text-[#E3E3E3]
      }

      .search {
        @apply w-full flex justify-center items-center relative;

       .icon{
        @apply h-[18px] left-[17px] top-[18px] absolute text-[#979797];
        }

        input{
          @apply accent-[#00ABF1] shadow-sm ring-1 ring-inset ring-gray-300 outline-none text-black w-[300px] bg-white;
          //background-color: #f2f7f6;
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

      
    }
  }
}

</style>