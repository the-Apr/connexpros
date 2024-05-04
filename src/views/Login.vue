<template>
<div class="login">
  <div class="login-wrap">

    <!-- logo -->
    <div class="logo-space">
      <img src="../assets/display/logo.png" alt="connexpros logo">
    </div>

    <!-- login form -->
    <div class="login-form">
      <form @submit.prevent= submitForm>

        <h2>Welcome Back</h2>

        <!-- login block  -->
        <div class="input-wrap">

          <!-- email -->
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email"
              maxlength="40" 
              placeholder="johndoe@email.com" 
              v-model="loginDetails.email" 
              :class="errorClass('email')"
            >
          </div>

          <!-- password -->
          <div class="form-group">
            <label for="email">Password</label>
            <input
              maxlength="20" 
              :type="showPassword ? 'text' : 'password'"  
              placeholder="Password" 
              v-model="loginDetails.password"
              :class="errorClass('password')"
            >

            <fa-icon 
              @click="toggleShowPassword" 
              class="eye-slash" 
              :icon="(showPassword ? ['far','eye'] : ['far','eye-slash'])" 
            />
          </div>

          <div class="signed">
            <input type="checkbox" name="signed">
            <label for="signed">Keep me signed</label>
          </div>

          <button 
          type="submit" 
          class="login-btn"
          :class="{'cursor-wait': loading}"
          :disabled="loading">

            <span v-if="loading">
              <fa-icon 
                class="circle-notch animate-spin" 
                :icon="['fas', 'spinner']" 
              />
            </span>

            <span v-else>
             Login
            </span> 
          </button>
                 
        </div> 

        <p class="forgot-password">
          <router-link :to="{name: 'reset-password'}"> forgot password</router-link>
        </p>
      </form>

      <div class="privacy-policy">
        <p>Privacy Policy</p>
      </div>
    </div>
  </div>

  
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { ElNotification } from 'element-plus'

export default {
  name: 'Login',

  data() {
    return {
      showPassword: null,
      emptyFields: [],
      error: null,
      errorMsg: '',
      loading: null,
      
      loginDetails: {
        email: "",
        password: ""
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

    toggleShowPassword(){
      this.showPassword = !this.showPassword
    },

    errorModal () {
      ElNotification({
        title: 'Error',
        message: this.errorMsg,
        type: 'error',
        
      })
    },


    async submitForm() {
      try {

        const { emptyFields, error } = await this.VALIDATE_EMPTY_FIELDS(this.loginDetails);
  
        this.emptyFields = emptyFields;
  
        if (error) {
          this.error = true;
          this.errorMsg = "Invalid username or password";
          this.errorModal();

        } else {
        
          //this.signIn();
        }
      }
      finally {
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
        password: null
      } 
    }  
  }
}
</script>

<style lang="scss" scoped>

  .login {
    @apply text-white overflow-hidden;
    height: 100vh;
    margin: 0 auto;

    .login-wrap {
      @apply flex flex-col gap-y-20 justify-center  w-full h-full;

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

      .login-form {
        @apply w-full flex flex-col items-center justify-center p-3 text-[#131615];

        @screen lg {
          @apply w-1/2  bg-[#104438] text-white;
          //bg-gradient-to-b from-[#1D7C66]
        }

        form { 
          @apply py-3 relative flex flex-col  gap-y-8 items-center justify-center h-full w-full;

          @screen lg {
            @apply gap-y-12 px-3 py-0;
          }
         
          h2 { 
            @apply text-lg font-medium tracking-wide mb-1;
            
            @screen md {
              @apply tracking-wider mb-3 font-semibold text-2xl;
            }

            @screen lg {
              @apply text-3xl;
            }
          }
      
          .input-wrap {
            @apply flex flex-col gap-4 justify-center items-center w-full max-w-[450px] p-2;

            @screen md{
              @apply p-5
            }
      
            .form-group {
              @apply relative flex flex-col gap-1 items-center justify-center w-full mb-2;

              @screen md {
                @apply mb-4
              }

              @screen lg {
                @apply gap-2;
              }

              label {
                @apply text-xs  ml-2 place-self-start;

                @screen md {
                  @apply text-base font-medium tracking-wider mb-1;
                }
              }

              input{
                @apply  shadow-sm  w-full rounded-lg px-8 py-4 text-sm
                border-none outline-none 
                ring-1 ring-inset ring-[#D4D6D9];
                
                @screen lg {
                  @apply bg-[#104438] bg-opacity-45 text-white text-base ;
                }

                &::placeholder {
                  @apply text-[#CACACA] text-opacity-50 text-[13px] text-left font-normal;

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

              .eye-slash {
                @apply h-[14px] absolute right-6 top-[40px];

                @screen md {
                  @apply top-14;
                }
                
              }
            }

            .signed {
              @apply flex gap-3 place-self-start;

              input[type='checkbox'] {
                @apply accent-[#DCBC86] text-white border-none;
              }
            }

            .login-btn {
              @apply flex justify-center items-center px-6 py-4 bg-[#DCBC86] w-full rounded-lg transition-colors text-sm text-white tracking-wide font-semibold leading-6;

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