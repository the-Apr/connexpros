<template>
  <div class="summary-wrap">
    <div class="top">
      <div class="summary-card" 
      v-for="i in 3" 
      :key="i"
      :class="'card' + i"
      >
        <div class="total-income">
          <h2>$235,900</h2>

          <p>Total Income</p>
        </div>

        <div class="contrPrice-chgOrder">
          <div class="title-prices">
            <p>Total Contract Price</p>
            <p> Charge Order</p>
          </div>

          <div class="title-prices">
            <p>$200,000</p>
            <p>$35,900</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="budget-alloc">
        <h2>Budget Allocation</h2>

        <div class="pie-chart">

        </div>
      </div>

      <div class="expenses-breakdown">
        <div class="expns-more">
          <h2>Expenses Breakdown</h2>
          <p>View More</p>
        </div>

        <div class="breakdown-table">

          <div class="each-expense"
          v-for="i in 6" :key="i">
            <div class="cost-amount">
              <p class="cost-title">Labor Cost</p>
              <p class="amount">$250.00</p>
            </div>

            <span class="material-symbols-outlined text-[#9F9F9F]">
              arrow_forward
            </span>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Summary'

}
</script>

<style lang='scss' scoped>
  .summary-wrap{
    @apply  flex flex-col gap-8 justify-center items-center;

    .top {
      @apply grid grid-cols-3 gap-5 w-full;

      .card1{
        @apply bg-[#C4D5ED] text-[#182E4E];
      }
      .card2 {
        @apply bg-[#F4E9D7];
      }
      .card3 {
        @apply bg-[#AFE8DB];
      }

      .summary-card {
        @apply p-5 divide-y-2 divide-[#616161] divide-opacity-20 flex flex-col rounded-2xl;

        .total-income {
          @apply py-2;

          h2{
            @apply font-bold text-xl;
          }
          p{
            @apply font-medium text-base;
          }
        }

        .total-income,
        .title-prices{
          @apply flex flex-row justify-between items-center gap-4;

        }

        .contrPrice-chgOrder{
          @apply flex flex-col gap-2 py-2 text-black text-opacity-75;
          
          p{
            @apply text-sm font-normal;
          }
        }
      }
    }

    .bottom {
      @apply grid grid-cols-2 gap-6 w-full;

      .budget-alloc,
      .expenses-breakdown{
        @apply flex flex-col gap-4 p-8 bg-[#F7F8F8] rounded-2xl;

        h2{
          @apply text-[#141515] text-base font-semibold tracking-wide;
        }

        .expns-more {
          @apply flex flex-row justify-between;

          p{
            @apply text-[#9F9F9F]
          }
        }

        .breakdown-table {
          @apply grid grid-cols-2;

          .each-expense {
            @apply flex flex-row gap-6 justify-center items-center p-6 w-full;

            .cost-amount{
              @apply flex flex-col gap-2;

              .cost-title{
                @apply text-sm text-[#515252];
              }

              .amount{
                @apply text-[#141515] font-bold text-base
              }
            }

          }
        }
      }
    }
  }
</style>