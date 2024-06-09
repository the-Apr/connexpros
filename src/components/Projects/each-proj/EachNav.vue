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
    
    :to="{name: 'milestone'}"
    >
      
      Milestone
    </router-link>

    <router-link 
    class="link" 
    :to="{name: 'documents'}"
    >
      
      Document
    </router-link>

    <router-link 
    class="link" 
    
    :to="{name: 'transaction'}"
    >
      
      Transaction
    </router-link>

    <router-link 
    class="link" 
    
    :to="{name: 'reports'}"
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

    .link {
      @apply py-5 text-base font-normal transition-colors;

      &:hover {
        @apply text-[#104438] ease-in-out;
      }
    }

    .router-link-exact-active {
      @apply text-[#104438] font-bold tracking-wide border-b-2 border-b-[#104438];
    }
  }
</style>