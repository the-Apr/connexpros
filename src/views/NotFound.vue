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
    @apply col-span-4 flex flex-col gap-4 justify-center items-center;

    h2{
      @apply text-lg uppercase;
    }
  }
</style>