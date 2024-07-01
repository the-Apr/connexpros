<template>
  <div class="panel-nav-wrap">
    <div class="panel-nav">

      <!-- logo -->
      <div class="logo-space">
        <img src="../../assets/logo.png" alt="logo image">
      </div>

      <div class="nav-log">
        <!-- nav-buttons -->
        <div class="nav-btn-wrap">
          <nav-buttons 
            v-for="(navBtn,index) in navBtnArray"
            :key="index"
            :title= navBtn.navTitle
            :iconImg = navBtn.navIcon
            :routeLink = navBtn.navRoute
          />
        </div>

        <!-- logout -->
        <div class="logout-wrap">
          <div class="logout">
            <fa-icon :icon="['fas', 'arrow-right-from-bracket']" class="icon" />
            <p>Logout</p>
          </div>
        </div>
      </div>

    </div>

  </div>
  
  
</template>

<script>
import NavButtons from './NavButtons.vue'

export default {
  name: 'PanelNav',

  components: { NavButtons },

  data() {
    return {
      navBtnArray: [
        {
          navIcon: 'dashboard',
          navTitle: 'Dashboard',
          navRoute: 'dashboard'
        },
        
        {
          navIcon: 'folder',
          navTitle: 'Documents',
          navRoute: 'doc'
        },
        {
          navIcon: 'business_center',
          navTitle: 'Projects',
          navRoute: 'proj'
        },
        {
          navIcon: 'account_balance_wallet',
          navTitle: 'Billings',
          navRoute: 'billing'
        },
        // {
        //   navImg: 'briefcase',
        //   navTitle: 'Dashboard',
        //   navRoute: ''
        // },
        
      ]
    }
  },

  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 980) {
        commit('setMobile', true);
      } else {
        commit('setMobile', false);
      }
    },
  }
}
</script>

<style lang='scss' scoped>
.panel-nav-wrap {
  @apply px-8 py-10  text-[#515252] max-w-[300px] border-r-2 border-[#EAEBEB] shadow-md col-span-1 hidden;
  //height: 100vh;
  z-index: 2;

  @screen lg{
    @apply block;
  }

  .panel-nav {
    @apply flex flex-col gap-y-24 justify-start content-center items-center h-full;

    .logo-space {
      @apply w-full flex items-center justify-center px-6;


        img {
          @apply object-cover w-[150px];
        }
    }

    .nav-log {
      @apply  flex flex-col gap-y-16 justify-between items-stretch h-full w-full;

      .nav-btn-wrap {
        @apply grid grid-cols-2 gap-4 justify-items-stretch items-center justify-center;
      }

      .logout-wrap {
        @apply border-t-2 border-[#EAEBEB] w-full justify-self-end;

        .logout {
          @apply flex flex-row gap-3 px-6 py-5 justify-start items-center bg-[#EAEBEB] mt-8 rounded-md;

          p {
            @apply text-sm font-semibold;
          }
        }
      }

    }

  }
}
</style>