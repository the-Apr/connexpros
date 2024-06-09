<template>
  <div class="transaction-wrap">
    <div class="table-head">
      <h2>Description</h2>
      <h2>Due Date</h2>
      <h2>Amount</h2>
      <h2>Receipt</h2>
    </div>

    <div class="table-body">
      <div class="transac-desc"
      v-for="(transac, index) in projTransactionArray"
      :key="index">

        <div class="desc-head">
          <span class="material-symbols-outlined" @click="toggleDropDown(index)">
            {{ isDropDown[index] ? 'keyboard_arrow_down' : 'keyboard_arrow_right' }}
          </span>
          <h2 class="dec-title">{{ transac.title }}</h2>
        </div>

        <div class="desc-body"
        v-show="isActive(index)">
          <div class="table-row"
          v-for="(row, index) in transac.descRows"
          :key="index">
            <p>{{ row.desc }}</p>
            <p>{{ row.dueDate }}</p>
            <p>{{ row.amount }}</p>
            <span class="material-symbols-outlined receipt-dot">
              receipt_long
            </span>
            <span class="material-symbols-outlined receipt-dot">
              more_horiz
            </span>
          </div>
        </div>
      </div>

     

    </div>
  </div>
</template>

<script>
export default {
  name: 'Transaction',

  data () {
    return {
      isDropDown : [],
      activeIndex: null,

      projTransactionArray: [
        {
          title: 'Labor Costs',
          descRows: [
            {
              desc: 'Material Purchase',
              dueDate: "March 7, 2024",
              amount: '$1200.25'
            },
            {
              desc: 'Material Purchase',
              dueDate: "March 7, 2024",
              amount: '$1200.25'
            },
            {
              desc: 'Material Purchase',
              dueDate: "March 7, 2024",
              amount: '$1200.25'
            },

          ]
        },

        {
          title: 'COGS',
          descRows: [
            {
              desc: 'Material Purchase',
              dueDate: "March 7, 2024",
              amount: '$1200.25'
            },
            {
              desc: 'Material Purchase',
              dueDate: "March 7, 2024",
              amount: '$1200.25'
            },
            {
              desc: 'Material Purchase',
              dueDate: "March 7, 2024",
              amount: '$1200.25'
            },

          ]
        },


      ]
    }
  },

  created() {
    
    this.isDropDown = this.projTransactionArray.map(() => false);

    console.log(this.isDropDown)
  },

  computed: {
    
  },

  methods: {
    toggleDropDown(index) {
      if (this.activeIndex === index) {

        this.isDropDown[index] = !this.isDropDown[index];
      } else {
       
        if (this.activeIndex !== null) {
          this.isDropDown[this.activeIndex] = false;
        }
        
        this.isDropDown[index] = true;
        this.activeIndex = index;
      }
    },

    isActive(index) {
      return this.activeIndex === index && this.isDropDown[index];
    }
  }
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
      @apply flex flex-col justify-center items-center py-6 px-10 divide-y-2 w-full bg-[#F7F8F8] rounded-b-2xl;

      .table-row{
        @apply px-4 py-2;

        p{
          @apply text-[#2A2A2A] text-sm;
        }

        span{
          @apply text-[#104438] text-base;
        }

        .receipt-dot{
          font-variation-settings:
          'FILL' 1,
          'wght' 400,
          'GRAD' 0,
          'opsz' 24
        }
      }

      //here
      .transac-desc{
        @apply flex flex-col gap-4 w-full justify-center items-start py-3;

        .desc-head {
          @apply flex flex-row gap-2 items-center text-base font-bold;
        }

        .desc-body {
          @apply flex flex-col gap-2 w-full;
        }
      }
    }
    
  }


</style>