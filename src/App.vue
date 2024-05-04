<template>
  
  <div id="app">

    <suspense>

      <template #default>
        <router-view/>
      </template>

      <template #fallback>
        <spinner/>
      </template>

    </suspense>
    
  </div>
  
</template>

<script>

export default {
  name: "app",

  components: {
   
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100vw;
    height: 100vh;
  }

</style>
