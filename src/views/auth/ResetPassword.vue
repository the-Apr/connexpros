<template>
  <div class="reset">
    <div class="reset-wrap">

      <!-- logo -->
      <div class="logo-space">
        <img src="../../assets/logo.png" alt="connexpros logo">
      </div>

      <!-- reset form -->
      <div class="reset-form" v-show="!resetLink">
        <form @submit.prevent= resetPassword>

          <h2>Reset Password</h2>

          <!-- login block  -->
          <div class="input-wrap">

            <!-- email -->
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="text"
                maxlength="40" 
                placeholder="johndoe@email.com" 
                v-model="loginDetails.email" 
                :class="errorClass('email')"
              >
            </div>

            <button 
            type="submit" 
            class="reset-btn"
            :class="{loading: 'cursor-wait'}"
            :disabled="loading">

              <span v-if="loading">
                <fa-icon 
                  class="circle-notch animate-spin" 
                  :icon="['fas', 'spinner']" 
                />
              </span>

              <span v-else>
              Reset Password
              </span> 
            </button>
          

          </div> 

          <p class="return-login">
            <span>Return to </span>
            <router-link :to="{name: 'login'}" class="login-return">Login</router-link>
          </p>
        </form>

        <div class="privacy-policy">
          <p>Privacy Policy</p>
        </div>
      </div>

      <!-- email sent -->
      <div class="reset-form" v-show="resetLink">
        <form>

          <h2>Check Your Email</h2>

          <!-- login block  -->
          <div class="input-wrap">

            <p class="reset-msg">An email containing a password reset link has been sent to you.</p>

            <button 
            type="submit" 
            class="reset-btn"
            :class="{loading: 'cursor-wait'}"
            :disabled="loading">

              <span v-if="loading">
                <fa-icon 
                  class="circle-notch animate-spin" 
                  :icon="['fas', 'spinner']" 
                />
              </span>

              <span v-else>
                <router-link :to="{name: 'login'}"> Go to Login</router-link>
              </span> 
            </button>
          

          </div> 

        </form>

        <div class="privacy-policy">
          <p>Privacy Policy</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ElNotification } from 'element-plus';

export default {
  components: {  },
  name: 'reset-password',

  data() {
    return {
      emptyFields: [],
      error: null,
      errorMsg: '',
      loading: null,
      resetLink: null,
      
      loginDetails: {
        email: "",
      }
    }
  },

  computed: {
    errorClass() {
      return (field) => ({
        errorField: this.error && this.emptyFields.includes(field) && !this.loginDetails[field],
      });
    },
  },

  methods: {
    ...mapActions ('formValid', ['VALIDATE_EMPTY_FIELDS']),

    errorModal () {
      ElNotification({
        title: 'Error',
        message: this.errorMsg,
        type: 'error',
      })
    },

    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
      ///^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    },

    async resetPassword() {
      try{

        const { emptyFields, error } = await this.VALIDATE_EMPTY_FIELDS(this.loginDetails);
        const isEmailValid = this.validateEmail(this.loginDetails.email);

        console.log(isEmailValid)
  
        this.emptyFields = emptyFields;
  
        if (error || !isEmailValid) {
          this.error = true;
          this.errorMsg = "Invalid email";
          this.errorModal();
        } else {
          this.error = false;
          this.resetLink = true;
          //this.sendResetLink();
        }
      }
      finally{
        setTimeout(() => {
          this.error = false;
          this.errorMsg = "";
          this.resetForm();
        }, 12000);
      }
    },

    resetForm() {
      this.loginDetails = {
        email: null,
      } 
    }  
  }
}
</script>

<style lang="scss" scoped>
  

  .reset {
    @apply text-white overflow-hidden;
    height: 100vh;
    margin: 0 auto;
    padding: 20px;

    .reset-wrap {
      @apply flex flex-col gap-y-20 justify-center w-full h-full;

      @screen lg {
        @apply flex-row gap-y-8 ;
      }

      .logo-space {
        @apply w-full flex items-center justify-center px-10;

        @screen lg {
          @apply w-1/2
        }

        img {
          @apply object-cover w-[250px];

          @screen lg {
            @apply w-[450px]
          }
        }
      }

      .reset-form {
        @apply w-full flex flex-col items-center justify-center p-3 text-[#131615];

        @screen lg {
          @apply w-1/2 bg-gradient-to-b from-[#1D7C66] to-[#104438] text-white;
        }

        form { 
          @apply py-3 relative flex flex-col  gap-y-8 items-center justify-center h-full w-full;

          @screen lg {
            @apply gap-y-10 px-3 py-0;
          }
         
          h2 { 
            @apply text-lg font-medium tracking-wide mb-1;
            
            @screen md {
              @apply tracking-wider font-semibold text-2xl;
            }
          }
      
          .input-wrap {
            @apply flex flex-col gap-4 justify-center items-center w-full max-w-[450px] p-2;

            @screen md{
              @apply p-5
            }
      
            .form-group {
              @apply relative flex flex-col gap-2 items-center justify-center w-full mb-2;

              @screen md {
                @apply mb-4
              }

              label {
                @apply text-xs mb-1 ml-2 place-self-start;

                @screen md {
                  @apply text-base font-medium tracking-wider;
                }
              }

              input{
                @apply  shadow-sm w-full rounded-lg px-8 py-4 text-sm
                border-none outline-none font-medium
                ring-1 ring-inset ring-[#D4D6D9];
                
                @screen lg {
                  @apply bg-[#104438] bg-opacity-45 text-base text-white;
                }

                &::placeholder {
                  @apply text-[#CACACA] text-opacity-50 text-[11px] text-left font-normal;

                  @screen md {
                    @apply text-base;
                  }
                }

                &:focus {
                  @apply ring-2 ring-[#DCBC86] transition ease-in-out duration-500;
                }
        
              }

              .errorField {
                box-shadow: 0 0 0 2px #dc2626 inset !important;
              }

            }

            .reset-msg {
              @apply mb-8;
            }

            .reset-btn {
              @apply flex justify-center items-center px-6 py-4 bg-[#DCBC86] w-full rounded-lg transition-colors text-sm text-white tracking-wide font-semibold leading-6;

              &:hover {
                @apply bg-opacity-80 ease-in-out;
              }

            }
          }

          .return-login {
            @apply cursor-pointer text-sm uppercase;
            transition: 0.5s ease all;

            span {
              @apply  opacity-50;
            }

            .login-return {
              @apply text-black no-underline underline-offset-2;

              @screen lg {
                @apply text-white;
              }

              &:hover {
                @apply underline;
              }
            }
          }

        } 

        .privacy-policy{
          @apply  bottom-9 absolute opacity-50;
          
          @screen lg {
            @apply place-self-end mr-4
          }
        }
      }
    }
  } 
</style>