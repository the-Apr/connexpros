<template>
  <div class="reset">
    <div class="reset-wrap">

      <!-- logo -->
      <div class="logo-space">
        <img src="../assets/display/logo.png" alt="connexpros logo">
      </div>

      <!-- login form -->
      <div class="reset-form">
        <form @submit.prevent= submitForm>

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
            Return to
            <router-link :to="{}">Login</router-link>
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

export default {
  name: 'reset-password',

  data() {
    return {
      emptyFields: [],
      error: null,
      errorMsg: '',
      loading: null,
      
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


    async submitForm() {
      this.loading = true;
      const { emptyFields, error } = await this.VALIDATE_EMPTY_FIELDS(this.loginDetails);

      this.emptyFields = emptyFields;

      if (error) {
        this.error = true;
        this.errorMsg = "Invalid username or password";
      } else {
        this.error = false;
        console.log('signed in')

        this.signIn();
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  

  .reset {
    @apply text-white overflow-hidden;
    height: 100vh;
    margin: 0 auto;

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
            @apply gap-y-12 px-3 py-0;
          }
         
          h2 { 
            @apply text-lg font-medium tracking-wide mb-1;
            
            @screen md {
              @apply tracking-wider mb-3 font-semibold text-2xl;
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
                @apply  shadow-sm text-white w-full rounded-lg px-8 py-4 text-sm
                border-none outline-none 
                ring-1 ring-inset ring-[#D4D6D9];
                
                @screen lg {
                  @apply bg-[#104438] bg-opacity-45 ;
                }

                &::placeholder {
                  @apply text-[#CACACA] text-[11px] text-left font-normal;

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

            .reset-btn {
              @apply flex justify-center items-center px-6 py-4 bg-[#DCBC86] w-full rounded-lg transition-colors;

              &:hover {
                @apply opacity-80 ease-in-out;
              }

              button{
                @apply text-sm tracking-wide font-semibold leading-6;
              }
            }
          }

          .return-login {
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