<template>
  <div class="modal-overlay" @click="checkClick" ref="milestoneWrap">
    <div class="modal">

      <form @submit.prevent= 'submitForm'>

        <h2>Add Milestone</h2>

    
        <div class="input-wrap">

          <!-- milestone -->
          <div class="form-group">
            <label for="text">Name of Milestone</label>
            <input 
              type="text"
              maxlength="40" 
              placeholder="Enter milestone" 
              v-model="milestoneData.title"
              :class="errorClass('title')"
            >
          </div>

          <!-- due date -->
          <div class="form-group">
            <label for="date">Due Date</label>
            <input
              type="date" 
              v-model="milestoneData.due_date"
              :class="errorClass('due_date')"
            >
          </div>

          <!-- priority lvl -->
          <div class="form-group">
            <label for="level">Priority Level</label>
            <input
              id="level"
              type="number" 
              min="1"
              max="3"
              maxlength="1"
              v-model="milestoneData.priority_level"
              :class="errorClass('priority_level')"
            >
          </div>

          <!-- status -->
          <div class="form-group">
            <label for="status">Status</label>
            <select 
            id="status"
            v-model="milestoneData.status"
            :class="errorClass('status')">
              <option value="In progress"> In Progress </option> 
              <option value="Complete"> Complete</option>
            </select>
          </div>

          <div class="signed">
            <input 
            type="checkbox" 
            name="signed"
            v-model="milestoneData.add_to_calendar"
            :class="errorClass('add_to_calendar')">
            <label for="signed">Save to calendar</label>
          </div>

          <button 
          type="submit" 
          class="save-btn"
          :class="{'cursor-wait': loading}"
          :disabled="loading">

            <span v-if="loading">
              <fa-icon 
                class="circle-notch animate-spin" 
                :icon="['fas', 'spinner']" 
              />
            </span>

            <span v-else>
             Save
            </span> 
          </button>
                 
        </div> 

      </form>
      
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ElNotification } from 'element-plus'
import CryptoJS from 'crypto-js';

export default {
  props: {
    // show: {
    //   type: Boolean,
    //   required: true,
    // },

    toggleModal: { 
      type: Function,
      default: () => {}
    }
  },
  name: 'AddMilestone',
  
  emits: ['milestone-saved'],

  data() {
    return {
      //showModal: this.show 
      emptyFields: [],
      error: null,
      errorMsg: '',
      loading: null,
      
      milestoneData: {
        project: 1,
        title: "",
        due_date: null,
        priority_level: null,
        //status: "",
        add_to_calendar: false
      }
    };
  },

  computed: {
    ...mapGetters('auth', ['GET_TOKEN']),

    errorClass() {
      return (field) => ({
        errorField: this.error && this.emptyFields.includes(field) && !this.milestoneData[field],
      });
    },
  },

  watch: {
    show: {
      handler(newVal) {
        this.showModal = newVal;
      },
      immediate: true 
    }
  },

  methods: {
    checkClick(e) {
      console.log('target', e.target);
      console.log('ref', this.$refs.milestoneWrap)
      
      if(e.target === this.$refs.milestoneWrap) {
        this.toggleModal();
      }
    },

    closeAndRoute() {
      this.showModal = false; 

      if (typeof this.routeHandler === 'function') {
        this.routeHandler();
      }
    },

    ...mapActions ('formValid', ['VALIDATE_EMPTY_FIELDS']),

    errorModal () {
      ElNotification({
        title: 'Error',
        message: this.errorMsg,
        type: 'error',
      })
    },


    async submitForm() {
      try {

        const { emptyFields, error } = await this.VALIDATE_EMPTY_FIELDS(this.milestoneData);
  
        this.emptyFields = emptyFields;
  
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

    async saveMilestone() {
      
      this.loading = true;
      try {
        
        const passphrase = process.env.PASSPHRASE;
        // const loginData = {
        //   username: await this.encryptData(this.loginDetails.username, passphrase),
        //   password: await this.encryptData(this.loginDetails.password, passphrase),
        // };

        //const token = localStorage.getItem('authToken'); 
        const token = this.GET_TOKEN;
        const response = await this.axios.post('milestones/', this.milestoneData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json' 
          }
        });

        this.$emit('milestone-saved');

        console.log('Save successful', response.data);

      }
      catch(err){
        this.loading = false;
        this.error = true;
        console.log(err);
        //console.error('Error:', error.response ? error.response.data : error.message);
      
        this.errorMsg = err.response ? err.response.data.message : "Couldn't save! Try again";
      }finally {
        this.loading = false;
        setTimeout(() => {
          this.error = false;
          this.errorMsg = "";
          this.resetForm();
        }, 12000);
      }
    },

    async encryptData(data, passphrase) {
      return CryptoJS.AES.encrypt(data, passphrase).toString();
    },

    resetForm() {
      this.milestoneData = {
        name: "",
        dueDate: null,
        priorityLvl: null,
        status: "",
        saveToCalendar: false
      } 
    }  
  }

}
</script>

<style lang="scss" scoped>

  .modal-overlay {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 9; 
  }

  // .modal {
  //   display: flex;
  //   position: fixed;
  //   justify-content: center;
  //   align-items: center;
  //   height: 100vh;
  //   width: 100%;
  //   padding: 0 10px;
  //   margin: 0 3px;

  //   @screen md {
  //     @apply px-2 mx-1
  //   }

    
  // }

  form { 
    @apply p-8 relative flex flex-col  gap-y-4 items-center justify-center w-[800px] text-[#141515] bg-white rounded-2xl ;
    
    h2 { 
      @apply text-2xl font-semibold tracking-wide mb-1 place-self-start;

    }

    .input-wrap {
      @apply flex flex-col gap-4 justify-center items-center w-full py-2; 

      .form-group {
        @apply relative flex flex-col gap-2 items-center justify-center w-full mb-2;

        label {
          @apply text-xs  ml-2 place-self-start;

          @screen md {
            @apply text-base font-medium tracking-wider mb-1;
          }
        }

        input,
        select{
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

        input[type='date']::-webkit-input-placeholder{
          @apply text-[#B6B9B9]  text-base text-left font-normal;
        }

        .errorField {
          box-shadow: 0 0 0 2px #dc2626 inset !important;
        }
      }

      .signed {
        @apply flex gap-3 place-self-start;

        input[type='checkbox'] {
          @apply accent-[#DCBC86] text-white border-none;
        }
      }

      .save-btn {
        @apply flex justify-center items-center px-6 py-4 bg-[#DCBC86] w-full rounded-lg transition-colors text-sm text-white tracking-wide font-semibold leading-6 mt-2;

        &:hover {
          @apply bg-opacity-80 ease-in-out;
        }
      }

      .error-msg{
        @apply flex gap-2 items-center text-red-700;
      }
    }

    .forgot-password {
      @apply cursor-pointer text-sm uppercase no-underline underline-offset-2 opacity-50;
      transition: 0.5s ease all;

      &:hover {
      @apply underline;
      }
    }

  } 

</style>