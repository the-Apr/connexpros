<template>
  
  <div id="app">

    <suspense>
      
      <router-view />

      <!-- <template #default>
        <div class="app-wrap">
          <panel-nav/>
          <router-view/>
        </div>

      </template> -->

      <!-- <template #fallback>
        <spinner/>
      </template> -->

    </suspense>
    
  </div>
  
</template>

<script>
import PanelNav from './components/Panel/PanelNav.vue'

export default {
  name: "app",

  components: {
    PanelNav
   
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
    @apply grid grid-cols-5 gap-1 h-full w-full overflow-x-hidden;
  }
</style>
