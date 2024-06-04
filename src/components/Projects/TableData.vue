<template>
  <div class="proj-table">
    <div class="table-head">
      <h2>Projects</h2>
      <h2>Status</h2>
      <h2>Customer</h2>
      <h2>Contract Price</h2>
    </div>

    <div class="table-body">
      <div class="table-row">
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>

        <!-- <p 
        class="status-button" 
        :class="{done: proj.formDone, 
        inprog: proj.formInit, 
        new: proj.formPending}">
          <span v-if="proj.formDone">Completed</span>
          <span v-if="proj.formInProg">In Progress</span>
          <span v-if="proj.formNew">New</span>
        </p> -->

        <p>Lorem ipsum.</p>
        <p>$100,000</p>
        <p>
          <router-link :to="{name: 'client-proj'}">  View Details. </router-link>
        </p>

      </div>
      
      <div class="table-row">
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>View Details.</p>

      </div>

      <div class="table-row">
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>View Details.</p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TableData',


}
</script>

<style lang='scss' scoped>
  .proj-table {
    @apply w-full h-full py-4 bg-white rounded-2xl flex flex-col gap-4 divide-y-2;

    .table-head h2:nth-child(1) {
      @apply justify-self-start;
    }

    .table-row p:nth-child(1) {
      @apply justify-self-start;
    }

    .table-head{
      @apply px-10;

      h2{
        @apply text-base font-medium
      }
    }

    .table-head, .table-row {
      @apply grid grid-cols-5 gap-2 w-full justify-center items-start py-4;
      
    } 
    
    .table-body {
      @apply flex flex-col gap-2 justify-center items-center py-4 px-10 divide-y-2;

      .table-row{
        @apply px-3;

        .status-button {
          @apply text-sm mr-7 items-center py-2 px-7 rounded-xl;

          &::before {
            content: "";
            @apply w-[10px] h-[10px] mr-2;
            border-radius: 50%;
            
          }

          .done {
            &::before {
              background-color: #33d69f;
            }
            color: #33d69f;
            background-color: rgba(51, 214, 160, 0.1);
          }

          .pending {
            &::before {
              background-color: #ff8f00;
            }
            color: #ff8f00;
            background-color: rgba(255, 145, 0, 0.1);
          }

          .init {
            &::before {
              background-color: #dfe3fa;
            }
            color: #dfe3fa;
            background-color: rgba(223, 227, 250, 0.1);
          }
        }
      
      }
    }
  }
</style>