<template>
  
  <div id="app">

    <!-- <spinner v-if="loading"/> -->

    <suspense>
      
      <template #default v-if="showAllAuth">
        <router-view />
      </template>
      
      <template #default v-else>

        <transition name="scale-fade" mode="out-in" >
        <div class="app-wrap" >
          <!-- v-if="!notFound && isAuthenticated" -->
          <panel-nav/>
          <router-view/>
        </div>
        </transition>
      </template>
      
      <template #fallback>
        <spinner/>
      </template>
      
    </suspense>
    
  </div>
  
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import PanelNav from './components/Panel/PanelNav.vue'

export default {
  name: "app",

  components: {
    PanelNav
  },

  data() {
    return {
      showAllAuth: false
    }
  },

  created () {
    this.checkAuthRoute();
  },

  mounted(){
    //this.loginRedirect();
  },

  computed: {
    ...mapState('auth', ['notFound']),
    ...mapGetters('auth', ['IS_LOADING', 'IS_AUTH']),

    loading(){
      return this.IS_LOADING;
    },

    isAuthenticated() {
      return this.IS_AUTH;
    }
  },

  watch: {
    '$route.name': 'checkAuthRoute'
  },  

  methods: {

    checkAuthRoute() {
      if(
        this.$route.name === 'login' ||
        this.$route.name === "sign-up" ||
        this.$route.name === "reset-password" ||
        this.$route.name === "not-found"
        
      ) {
        this.showAllAuth = true;

        return;
      }

      this.showAllAuth = false;
    },

    loginRedirect() {
      if(!this.notFound && !this.isAuthenticated) {
        this.$router.push({name: 'login'})
      }
    }
  }
}
</script>

<style lang="scss">
  #app {
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    // width: 100vw;
    height: 100vh;
  }

  // .icon {
  //   @apply h-[18px];
  // }

  .app-wrap {
    @apply  flex flex-row gap-1 h-full w-full overflow-x-hidden;
  }

  .scale-fade-enter-active,
  .scale-fade-leave-active {
    transition: transform 1s ease, opacity 1s ease;
  }

  .scale-fade-enter-from {
    /* transform: scale(0.8); */
    transform: translateY(20px);
    opacity: 0;
  }

</style>
