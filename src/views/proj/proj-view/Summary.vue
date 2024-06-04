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
  }
</style>