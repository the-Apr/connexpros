<template>
  <div class="projects-wrap">
    <nav-header title= "Projects"/>

    <div class="doc-body">
      <template v-if="showSortAndTable">
        <sort-filter />
        <table-data />
      </template>

     
      <router-view/>
     
    </div>


  </div>
  
</template>

<script>
import NavHeader from '@/components/Panel/NavHeader.vue';
import SortFilter from '@/components/SortFilter.vue';
import TableData from '@/components/Projects/TableData.vue';

export default {
  name: 'Projects',

  components: { NavHeader, SortFilter, TableData },

  computed: {
    showSortAndTable() {
      
      return !this.$route.path.includes('client-proj');
    }
  }

}
</script>

<style lang='scss' scoped>
.projects-wrap{
  @apply col-span-4 text-black h-full flex flex-col;

  .doc-body{
    @apply flex flex-col gap-6 justify-start items-start h-full p-14 bg-[#F7F8F8]; 

    
  }
}
</style>