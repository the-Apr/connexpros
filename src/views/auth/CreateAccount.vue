<template>
<div class="register">
  <div class="register-wrap">

    <!-- logo -->
    <div class="logo-space">
      <img src="../../assets/logo.png" alt="connexpros logo">
    </div>

    <!-- register form -->
    <div class="register-form">
      <form @submit.prevent= submitForm>

        <h2>Welcome, Sign Up</h2>

        <!-- login block  -->
        <div class="input-wrap">

          <!-- firstname -->
          <!-- <div class="form-group">
            <label for="firstname">Firstname</label>
            <input 
              type="text"
              maxlength="30" 
              placeholder="firstname" 
              v-model="signUpDetails.firstname" 
              :class="errorClass('firstname')"
            >
          </div> -->

          <!-- lastname -->
          <!-- <div class="form-group">
            <label for="lastname">Lastname</label>
            <input 
              type="text"
              maxlength="30" 
              placeholder="lastname" 
              v-model="signUpDetails.lastname" 
              :class="errorClass('lastname')"
            >
          </div> -->

          <!-- email -->
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="text"
              maxlength="40" 
              placeholder="johndoe@email.com" 
              v-model="signUpDetails.email" 
              :class="errorClass('email')"
            >
          </div>

          <!-- password -->
          <div class="form-group">
            <label for="email">Password</label>
            <input
              maxlength="15" 
              :type="showPassword ? 'text' : 'password'"  
              placeholder="password" 
              v-model="signUpDetails.password"
              :class="errorClass('password')"
            >

            <fa-icon 
              @click="toggleShowPassword" 
              class="eye-slash" 
              :icon="(showPassword ? ['far','eye'] : ['far','eye-slash'])" 
            />
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

            <span v-else-if="signInSuccess">
              <fa-icon :icon="['fas', 'check']" />
            </span>

            <span v-else>
             Sign Up
            </span> 
          </button>
                 
        </div> 

        <p class="forgot-password">
          Have an account?<router-link :to="{name: 'login'}"> login</router-link>
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
import CryptoJS from 'crypto-js';

export default {
  name: 'Login',

  data() {
    return {
      signInSuccess: null,
      showPassword: null,
      emptyFields: [],
      error: null,
      errorMsg: '',
      loading: null,
      
      signUpDetails: {
        email: "",
        password: "",
        userType: 'CLIENT'
      }
    }
  },

  computed: {
    errorClass() {
      return (field) => ({
        errorField: this.error && this.emptyFields.includes(field) && !this.signUpDetails[field],
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

        const { emptyFields, error } = await this.VALIDATE_EMPTY_FIELDS(this.signUpDetails);
  
        this.emptyFields = emptyFields;
  
        if (error) {
          this.error = true;
          this.errorMsg = "Enter valid username or password";
          this.errorModal();

        } else {
          this.signUp();
        }
      }
      finally {
        setTimeout(() => {
          this.error = false;
          this.errorMsg = "";
        }, 30000);
      }
    },

    async signUp() {
      
      this.loading = true;

      try {
        
        const passphrase = process.env.PASSPHRASE;
        const signUpData = {
          user: {
            username: await this.encryptData(this.signUpDetails.email, passphrase),
            user_type: await this.encryptData(this.signUpDetails.userType, passphrase)
          },
         
          password: await this.encryptData(this.signUpDetails.password, passphrase),
          
        };

        
        const response = await this.axios.post('auth/create-client/', signUpData);

        this.loading = false;
        this.signInSuccess = true;

        console.log('sign up successful', response.data);

      }
      catch(err){
        this.loading = false;
        this.error = true;
        //console.log(err)

        this.errorMsg = "Couldn't sign up. Try again.";
        this.errorModal();
      }
      finally {
        this.loading = false;
        setTimeout(() => {
          this.error = false;
          this.errorMsg = "";
          this.signInSuccess = false;
          this.resetForm();
        }, 20000);
      }
    },

    async encryptData(data, passphrase) {
      return CryptoJS.AES.encrypt(data, passphrase).toString();
    },

    resetForm() {
      this.signUpDetails = {
        firstname: "",
        laststname: "",
        email: "",
        password: ""
      } 
    }  
  }
}
</script>

<style lang="scss" scoped>

  .register {
    @apply text-white overflow-hidden;
    height: 100vh;
    margin: 0 auto;

    .register-wrap {
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

      .register-form {
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
              @apply relative flex flex-col gap-1 items-center justify-center w-full mb-1;

              label {
                @apply text-xs  ml-2 place-self-start;

                @screen md {
                  @apply text-base font-medium tracking-wider mb-1;
                }
              }

              input{
                @apply  shadow-sm  w-full rounded-lg px-8 py-4 text-base font-medium 
                border-none outline-none 
                ring-1 ring-inset ring-[#D4D6D9];
                
                @screen lg {
                  @apply bg-[#104438] bg-opacity-45 text-white  ;
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