<template>
  
  <div id="app">

    <suspense>
      
      <template #default v-if="showAllAuth">
        <router-view />
      </template>

      <template #default v-else>
        <div class="app-wrap">
          <panel-nav/>
          <router-view/>
        </div>

      </template>

      <template #fallback>
        <spinner/>
      </template>

    </suspense>
    
  </div>
  
</template>

<script>
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

  computed: {
  },

  watch: {
    '$route.name': 'checkAuthRoute'
  },  

  methods: {
    // fetchGoggleIcons() {
    //   const link = document.createElement('link');
    //   link.rel = 'stylesheet';
    //   link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    //   document.head.appendChild(link);
    // },

    checkAuthRoute() {
      if(
        this.$route.name === 'login' ||
        this.$route.name === "sign-up" ||
        this.$route.name === "reset-password"
      ) {
        this.showAllAuth = true;

        return;
      }

      this.showAllAuth = false;
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

  //grid grid-cols-5
</style>
