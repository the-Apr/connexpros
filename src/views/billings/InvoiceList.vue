<template>
  <div class="invoice-wrap">

    <transition name="invoice">
      <invoice-form v-show="showInvoiceForm"  />
    </transition>

    <!-- add milestone btn-->
    <div class="add-invoice">

      <h2>Invoicing</h2>

      <button class="btn" @click="addInvoice">
          
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
        <h2>Customer</h2>
        <h2>Date</h2>
        <h2>Status</h2>
        <h2>Amount</h2>
      </div>

      <div class="table-body">
        <div class="table-row" v-for="(i, index) in 3" :key="index">
          <p>INV-1001</p>
          <p>Mc Donaldsssssssdddddddddddddddd</p>
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
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import InvoiceForm from './InvoiceForm.vue';
export default {
  name: 'InvoiceList',

  components: { InvoiceForm },

  data() {
    return {
      
    }
  },

  computed: {
    ...mapGetters ('billings', ['INVOICE_MODAL']),

    showInvoiceForm(){
      return this.INVOICE_MODAL;
    }

  },

  methods: {
    ...mapMutations ('billings', ['TOGGLE_INVOICE']),

    addInvoice() {
      this.TOGGLE_INVOICE();
    },

  }

}
</script>

<style lang='scss' scoped>
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

      .table-head h2:nth-child(2) {
        @apply col-span-2;
      }

      .table-row p:nth-child(1) {
        @apply justify-self-start;
      }

      .table-row p:nth-child(2) {
        @apply col-span-2;
      }

      .table-head{
        @apply px-10 text-[#141515];

        h2{
          @apply text-base font-medium
        }
      }

      .table-head, .table-row {
        @apply grid grid-cols-7 gap-2 w-full py-4;
        
      } 
      
      .table-body {
        @apply flex flex-col justify-center items-center pb-4 px-4 divide-y-2;

        @screen lg {
          @apply px-10
        }

        .table-row{
          @apply px-3 text-[#2A2A2A];

          p{
            @apply whitespace-nowrap overflow-hidden flex items-center justify-center;
          }
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

  .invoice-enter-active,
  .invoice-leave-active {
    transition: 0.5s ease all;
  }

  .invoice-enter-from,
  .invoice-leave-to {
    opacity: 0;
    //transform: translateX(700px);
  }
</style>