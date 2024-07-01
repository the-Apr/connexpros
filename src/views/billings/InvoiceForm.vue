<template>
  <div class="invoice-overlay" @click="checkClick" ref="invoiceWrap">

    <form class="invoice-modal" @submit.prevent= 'submitInvoice'>
      <h2>Create Invoice</h2>

      <div class="top-details">
        <div class="form-group">
          <label for="text" class="invoice-id">Invoice ID</label>
          <input 
            type="text"
            maxlength="40" 
            placeholder="Enter milestone" 
            v-model="newInvoice.invoiceId"
            :class="errorClass('invoiceId')"
          >
        </div>

        <!-- due date -->
        <div class="form-group">
          <label for="date">Due Date</label>
          <input
            type="date" 
            v-model="newInvoice.dueDate"
            :class="errorClass('dueDate')"
          >
        </div>

        <div class="work-items">
          <table class="item-list">
            <tr class="table-heading">
              <th class="item-name">Item Name</th>
              <th class="qty">Qty</th>
              <th class="price">Price</th>
              <th class="total">Total</th>
            </tr>

            <tr class="table-items" v-for="(item, index) in newInvoice.invoiceItemList" :key="index">
              <td class="item-name">
                <input 
                  type="text" 
                  v-model="item.itemName"
                  :class="errorClass(`invoiceItemList[${index}].itemName`)"
                >
              </td>

              <td class="qty">
                <input 
                  type="text" 
                  v-model="item.qty"
                  :class="errorClass(`invoiceItemList[${index}].qty`)"
                >
              </td>

              <td class="price">
                <input 
                  type="text" 
                  v-model="item.price"
                  :class="errorClass(`invoiceItemList[${index}].price`)"
                >
              </td>

              <td class="total">${{item.total = item.qty * item.price}}</td>

              <fa-icon class="icon" @click="deleteInvoiceItem(item.id)" :icon="['fas', 'trash']" />
            </tr>
          </table>

          <div @click="addNewInvoiceItem" class="invoice-btn add-item">
            <fa-icon class="icon" :icon="['fas', 'plus']" />
            Add New Item
          </div>
        </div>
      </div>

      <!-- billed to -->
      <div class="bill-to">

        <h2>Bill To</h2>

        <!-- compant name -->
        <div class="form-group">
          <label for="text">Cutomer/ Company Name</label>
          <input 
            type="text"
            maxlength="40" 
            placeholder= "Customer Name" 
            v-model="newInvoice.companyName"
            :class="errorClass('companyName')"
          >
        </div>

        <!-- email address -->
        <div class="form-group">
          <label for="text">Email Address</label>
          <input 
            type="email"
            maxlength="40" 
            placeholder="companyname@company.com" 
            v-model="newInvoice.billingEmail"
            :class="errorClass('billingEmail')"
          >
        </div>

        <!-- Billing addrress -->
        <div class="form-group">
          <label for="text">Billing Address</label>
          <input 
            type="text"
            maxlength="40" 
            placeholder="Street Address, Zip code, City" 
            v-model="newInvoice.billingAddress"
            :class="errorClass('billingAddress')"
          >
        </div>
      </div>

      <!-- button -->
      <button 
      type="submit" 
      class="invoice-btn"
      :class="{'cursor-wait': loading}"
      :disabled="loading">

        <span v-if="loading">
          <fa-icon 
            class="circle-notch animate-spin" 
            :icon="['fas', 'spinner']" 
          />
        </span>

        <span v-else-if="invoiceSuccess">
          <fa-icon :icon="['fas', 'check']" />
        </span>

        <span v-else>
          Create Invoice
        </span> 
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { ElNotification } from 'element-plus'
import { uid } from 'uid';

export default {
  name: 'InvoiceForm',

  data() {
    return {
      invoiceSuccess: false,
      emptyFields: [],
      error: null,
      errorMsg: '',
      loading: null,
      
      newInvoice: {
        invoiceId: null,
        dueDate: null,
        companyName: "",
        billingEmail: null,
        billingAddress: null,
        invoiceItemList: [],
      }
    };
  },

  computed: {
    ...mapGetters('auth', ['GET_TOKEN']),

    errorClass() {
      return (field) => ({
        errorField: this.error && this.emptyFields.includes(field) && !this.newInvoice[field],
      });
    },
  },

  mounted() {
    this.addNewInvoiceItem();
  },

  methods: {
    ...mapMutations ('billings', ['TOGGLE_ACTION_MODAL']),
    ...mapActions ('formValid', ['VALIDATE_EMPTY_FIELDS', 'VALIDATE_FORM_DATA']),


    deleteInvoiceItem(id) {
      this.newInvoice.invoiceItemList = this.newInvoice.invoiceItemList.filter(item => item.id !== id)
    },

    addNewInvoiceItem() {
      this.newInvoice.invoiceItemList.push({
      id: uid(),
      itemName: "",
      qty: "",
      price: null,
      total: null,
      })
    },

    checkClick(e) {
      if(e.target === this.$refs.invoiceWrap) {
        this.TOGGLE_ACTION_MODAL();
      }
    },

    errorModal () {
      ElNotification({
        title: 'Error',
        message: this.errorMsg,
        type: 'error',
      })
    },

    async submitInvoice() {
      try {

       const { emptyFields, error} = await this.VALIDATE_FORM_DATA(this.newInvoice);

        this.emptyFields = emptyFields
    
        if (error) {
          this.error = true;
          this.errorMsg = "Invalid data. Try again";
          this.errorModal();

        } else {
        
          this.saveMilestone();
        }
      }
      finally {
        setTimeout(() => {
          this.error = false;
          this.errorMsg = "";
        }, 12000);
      }
    },

  }

}
</script>

<style lang='scss' scoped>
  .invoice-overlay {
    position: fixed;
    display: flex;
    justify-content: end;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 3; 

  }

  .errorField {
    box-shadow: 0 0 0 2px #dc2626 inset !important;
  }

  .invoice-modal { 
    @apply px-10 py-12 relative flex flex-col  gap-y-8 items-center justify-start w-[700px] h-full text-[#141515] bg-white overflow-y-scroll;

    //box-shadow: -7px 4px 6px -2px rgba(0, 0, 0, 0.1);
    
    h2 { 
      @apply text-2xl font-semibold tracking-wide mb-1 place-self-start;

    }

    .top-details .form-group:nth-of-type(1) label {
      @apply text-[#141515] text-opacity-70;
    }

    .top-details,
    .bill-to {
      @apply flex flex-col gap-4 justify-center items-center w-full py-2; 

      .form-group {
        @apply relative flex flex-col gap-2 items-center justify-center w-full mb-2;

        label {
          @apply text-xs  ml-2 place-self-start;

          @screen lg {
            @apply text-base font-medium tracking-wider mb-1;
          }
        }


        input[type='date']::-webkit-input-placeholder{
          @apply text-[#B6B9B9]  text-base text-left font-normal;
        }
      }
    }

    .work-items {
      @apply w-full;
      
      .item-list {
        @apply w-full;
      
        .table-heading{
          @apply  mb-6 flex;

          th{
            @apply text-base font-medium tracking-wider ;
          }
        }

        .table-items {
          @apply relative mb-6 flex;

          .icon {
            @apply absolute top-4 right-0 w-3 h-4;
          }
        }

        .table-heading,
        .table-items {
          @apply gap-4 text-xs;

          .item-name {
            @apply basis-1/2  text-start pl-2;
          }

          .qty {
            flex-basis: 10%;
          }

          .price,
          .total {
            @apply basis-1/5;
          }

          .total {
            @apply flex justify-center items-center;
          }

        }
      }


      .add-item {
        @apply flex gap-3;
      }
    }

    // reuseable style

    input{
      @apply  shadow-sm  w-full rounded-lg px-8 py-4 text-base font-medium 
      border-none outline-none 
      ring-1 ring-inset ring-[#D0D5DD];

      &::placeholder{
        @apply text-[#B6B9B9]  text-base text-left font-normal;

      }

      &:focus {
        @apply ring-2 ring-[#DCBC86] transition ease-in-out duration-500;
      }

    }

    .invoice-btn {
      @apply flex justify-center items-center px-6 py-4 bg-[#DCBC86] w-full rounded-lg transition-colors text-sm text-white tracking-wide font-semibold leading-6 mt-2 cursor-pointer;

      &:hover {
        @apply bg-opacity-80 ease-in-out;
      }
    }

    .invoice-btn:nth-child(2){
      @apply border border-[#DCBC86] text-[#DCBC86] bg-transparent;
    }
  }


</style>