<template>
  <div class="transaction-wrap">
    <div class="table-head">
      <h2>Due Date</h2>
      <h2>Title</h2>
      <h2>Priority</h2>
      <h2>Status</h2>
    </div>

    <div class="table-body">
      <div>first</div>
      <div>second</div>
      <div>third</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary'

}
</script>

<style lang='scss' scoped>
  .transaction-wrap {
    @apply mx-auto rounded-2xl flex flex-col px-4;

    .table-head h2:nth-child(1) {
      @apply justify-self-start;
    }

    .table-row p:nth-child(1) {
      @apply justify-self-start;
    }

    .table-head{
      @apply px-10 bg-[#EAEBEB] rounded-t-2xl;

      h2{
        @apply text-base font-medium
      }
    }

    .table-head, .table-row {
      @apply grid grid-cols-5 gap-2 w-full justify-center items-start py-4;
      
    } 
    
    .table-body {
      @apply flex flex-col justify-center items-center py-4 px-10 divide-y-2 w-full bg-[#F7F8F8] rounded-b-2xl;

      .table-row{
        @apply px-3;
      }
    }
    
  }


</style>