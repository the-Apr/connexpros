<template>
  <div class="proj-details-nav">
    <router-link 
      class="link" 
      :to="{name: 'summary'}"
      >
      
      Summary
    </router-link>

    <router-link 
      class="link" 
      
      :to="{name: ''}"
      >
      
      Milestone
    </router-link>

    <router-link 
      class="link" 
      :to="{name: ''}"
      >
      
      Document
    </router-link>

    <router-link 
      class="link" 
      
      :to="{name: ''}"
      >
      
      Transaction
    </router-link>

    <router-link 
      class="link" 
      
      :to="{name: ''}"
      >
      
      Reports
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'EachNav',


}
</script>

<style lang='scss' scoped>
  .proj-details-nav {
    @apply flex flex-row gap-8 justify-start items-center px-6;

    .router-link-exact-active {
      @apply text-[#104438];
    }
  }
</style>