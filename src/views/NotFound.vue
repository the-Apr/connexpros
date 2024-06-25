<template>
  <div class="not-found">
    <h2>Page Not found</h2>

    <router-link :to="{name: 'login'}"> Kindly Login </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'

}
</script>

<style lang='scss' scoped>
  .not-found{
    @apply flex flex-col gap-4 justify-center items-center h-full bg-[#104438] text-white;;

    h2{
      @apply text-lg uppercase font-medium;
    }

    a{
      @apply no-underline underline-offset-2 opacity-70 font-medium text-base;
      transition: 0.5s ease all;

      &:hover {
        @apply underline;
      }
    }
  }
</style>