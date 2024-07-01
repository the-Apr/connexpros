<template>
  <div class="billings-wrap">

    <action-modal v-if="isActionActive"/>

    <nav-header title= "Billings"/>

    <div class="billings">

      <div class="details">
        <div class="paid-pending">
          <div class="paid">
            <p class="title">Total Paid</p>
            <p class="amount text-[#2CBA99]">$345,676.56</p>
          </div>

          <div class="pending">
            <p class="title">Total Pending</p>
            <p class="amount text-[#DCBC86]">$345,676.56</p>
          </div>
        </div>

        <div class="edit-invoice">
          <h2 class="title">Edit Invoice Details</h2>
          
          <p class="info">Edit your invoice details, including payment information, billing address etc. Ensure all information is accurate and up-to-date to avoid any discrepancies. </p>

          <router-link class="link" :to="{name: ''}">
            <p>Edit Details</p>
            <span class="material-symbols-rounded">
              arrow_forward
            </span>
           </router-link>
          
        </div>

        <div class="edit-invoice">
          <h2 class="title">Pricing Calculator</h2>
          
          <p class="info">Edit your invoice details, including payment information, billing address etc. Ensure all information is accurate and up-to-date to avoid any discrepancies. </p>

          <router-link class="link" :to="{name: ''}">Calculate now</router-link>
          
        </div>
        
      </div>

      <invoice-list/>
     
    </div>

  </div>
  
</template>

<script>
import {defineAsyncComponent} from 'vue';
import { mapMutations, mapGetters } from 'vuex';

const NavHeader = defineAsyncComponent(() => import('@/components/Panel/NavHeader.vue'));
const SortFilter = defineAsyncComponent(() => import('@/components/SortFilter.vue'));
const TableData  = defineAsyncComponent(() => import('@/components/Projects/TableData.vue'));
const InvoiceList  = defineAsyncComponent(() => import('@/views/billings/InvoiceList.vue'));
const ActionModal  = defineAsyncComponent(() => import('@/views/billings/ActionModal.vue'));


export default {
  name: 'Billing',

  components: { NavHeader, SortFilter, TableData, InvoiceList, ActionModal },

  computed: {
    ...mapGetters ('billings', ['IS_ACT_MOD_ACTIVE']),
    ...mapMutations ('billings', ['TOGGLE_ACTION_MODAL']),

    isActionActive(){
      return this.IS_ACT_MOD_ACTIVE;
    }

  }

}
</script>

<style lang='scss' scoped>
.billings-wrap{
  @apply flex-1 text-black h-full overflow-y-scroll flex flex-col;

  .billings {
    @apply flex flex-col gap-10 h-full justify-start items-center p-10 bg-[#F7F8F8];

    .details{
      @apply flex flex-row gap-6 mb-1;

      .paid-pending,
      .edit-invoice{
        @apply bg-white drop-shadow-sm py-6 px-8 flex flex-col gap-y-8 justify-start items-start rounded-2xl min-w-[280px];

        .paid,
        .pending{
          @apply flex flex-col gap-2;

          .title {
            @apply  text-[#515252] font-medium text-sm text-start uppercase;
          }

          .amount{
            @apply text-[21px] font-semibold;
          }

          
        }

        .title{
          @apply text-[#141515] text-lg font-semibold;
        }

        .info {
          @apply text-[#515252] text-sm text-left;
        }

        .link {
          @apply text-[#104438] text-sm font-medium flex items-center gap-1;

          p{
            &:hover {
              @apply underline;
            }
          }

          span{
            @apply text-sm;
          }

        }
      }
    }
    
  }
}
</style>