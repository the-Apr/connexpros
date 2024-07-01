<template>
<div class="modal-overlay">

  <div class="modal">
    <div class="modal-content">
      <p>Are you sure you want to exit? Your changes will not be saved?</p>
      <div class="actions">
        <button @click="closeActionModal" class="purple">Return</button>
        <button @click="closeInvoice" class="red">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
name: "Modal",

computed: {
  
},

methods: {
  ...mapMutations ('billings', ['TOGGLE_ACTION_MODAL', "TOGGLE_INVOICE"]),

  closeActionModal() {
    this.TOGGLE_ACTION_MODAL();
  },

  closeInvoice() {
    this.TOGGLE_ACTION_MODAL();
    this.TOGGLE_INVOICE();
  }
}
}
</script>

<style lang="scss" scoped>
  .modal-overlay {
    @apply flex justify-center items-center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 4; 
  }

  

    .modal-content {
      @apply rounded-2xl px-7 py-10 max-w-[450px] bg-white text-[#141515] flex flex-col gap-4 justify-center items-center;

      p {
        @apply text-center text-base font-medium;
      }

      .actions {
        @apply mt-5 flex gap-3 flex-row justify-center items-center w-full;
  
        button {
          @apply flex flex-1 flex-row gap-3 px-4 py-3 justify-center items-center bg-[#DCBC86]  text-white  rounded-md uppercase text-base font-semibold transition-colors ease-in-out;

           &:hover{
            @apply border border-[#DCBC86] text-[#DCBC86] bg-transparent 
          }
        }

        button:nth-child(2) {
          @apply border border-[#3D3D3D] text-[#3D3D3D] bg-transparent transition-colors ease-in-out;

          &:hover{
            @apply bg-[#3D3D3D] text-white
          }
        }
      }
    }
  

</style>