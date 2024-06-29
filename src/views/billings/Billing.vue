<template>
  <div class="billings-wrap">
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

      <div class="invoice-wrap">

        <add-milestone v-show="showMilestoneModal" @milestone-saved="handleMilestoneSaved" :toggleModal="handleClickOutside"/>

        <!-- add milestone btn-->
        <div class="add-invoice" @click.stop= "openMilestoneModal">

          <h2>Invoicing</h2>

          <button class="btn">
              
            <span class="material-symbols-outlined btn-icon">
              add_circle
            </span>
            
            <h3 class="btn-title">
              add invoice
            </h3>
          </button>
        </div>

        <!-- milestone table -->
        <div class="invoice-table">
      
          <div class="table-head">
            <h2>Invoice ID</h2>
            <h2>Date</h2>
            <h2>Status</h2>
            <h2>Customer</h2>
            <h2>Amount</h2>
          </div>

          <div class="table-body">
            <div class="table-row" v-for="(i, index) in 3" :key="index">
              <p>INV-1001</p>
              <p>Feb 16</p>

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
              <p>Mc Donalds</p>
              <p>$100,000</p>
              <p class="view-download">
                <span class="material-symbols-outlined">
                  visibility
                </span>
                <span class="material-symbols-outlined">
                  download
                </span>
              </p>

            </div>

          </div>
        </div>
    
      </div>
     
    </div>

  </div>
  
</template>

<script>
import NavHeader from '@/components/Panel/NavHeader.vue';
import SortFilter from '@/components/SortFilter.vue';
import TableData from '@/components/Projects/TableData.vue';

export default {
  name: 'Billing',

  components: { NavHeader, SortFilter, TableData },

  computed: {
    showSortAndTable() {
      
      return !this.$route.path.includes('client-proj');
    }
  }

}
</script>

<style lang='scss' scoped>
.billings-wrap{
  @apply flex-1 text-black h-full overflow-y-scroll flex flex-col;

  .billings {
    @apply flex flex-col gap-10 h-full justify-center items-center p-10 bg-[#F7F8F8];

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

    .invoice-wrap {
      @apply p-8 flex flex-col gap-2 w-full bg-white rounded-2xl;

      .add-invoice {
        @apply flex flex-row justify-between items-center;

        h2{
          @apply text-lg font-semibold text-[#141515]
        }

        .btn {
          @apply flex flex-row gap-3 px-4 py-3 justify-center items-center bg-[#DCBC86] w-full text-white max-w-[180px] rounded-md;


          .btn-title {
            @apply uppercase font-semibold text-base;
          }
        }
      }

      .invoice-table {
        @apply w-full h-full py-1 flex flex-col  divide-y-2;

        .table-head h2:nth-child(1) {
          @apply justify-self-start;
        }

        .table-row p:nth-child(1) {
          @apply justify-self-start;
        }

        .table-head{
          @apply px-10 text-[#141515];

          h2{
            @apply text-base font-medium
          }
        }

        .table-head, .table-row {
          @apply grid grid-cols-6 gap-2 w-full justify-center items-start py-4;
          
        } 
        
        .table-body {
          @apply flex flex-col justify-center items-center pb-4 px-10 divide-y-2;

          .table-row{
            @apply px-3 text-[#2A2A2A];

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

            .view-download{
              @apply flex flex-row gap-4 justify-end items-center;

              span{
                @apply text-[#104438] text-[16px] border p-1 border-[#104438] rounded-md transition-colors ease-in-out;

                &:hover{
                  @apply bg-[#104438] text-white ;
                }
              }
            }
          
          }
        }
      }
    }
  }
}
</style>