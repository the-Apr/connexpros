<template>
  <div class="btn-wrap">

    <!-- Btn icon -->
    <router-link :to="{name: routeLink}"
     class="nav-link" >
      <div class="nav-btn"
      :class="{ activeNav: isActiveRoute(routeLink) }">
        <fa-icon 
        :icon="['fas', iconImg]"
        class="icon" />
      </div>

      <!-- Btn title -->
      <div class="nav-title" >
        <p :class="{ activeTitle: isActiveRoute(routeLink) }">{{title}}</p>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'NavButtons',

  props: {
    routeLink: {
      type: String,
      required: true
    },
    iconImg: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
    
    }
 },

 computed: {

 },

 methods: {
   isActiveRoute(routeLink) {
      return this.$route.matched.some(record => record.name === routeLink);
      
      // return this.$route.path.includes(routeLink);
    },
 }
}
</script>

<style lang='scss' scoped>

.router-link-active{
  @apply shadow-lg;
}

.btn-wrap {
  @apply  max-w-[150px];

  @screen xl {
    @apply gap-4;
  }

  .nav-link {
    @apply flex flex-col gap-3 p-1 items-center justify-center rounded-xl;

   

    .nav-btn {
      @apply  p-2 flex items-center justify-center w-[60px] h-[50px] bg-[#EAEBEB]  text-[#104438] rounded-xl;

      @screen xl {
        @apply w-[80px] h-[70px];
      }

      &.activeNav,
      &:hover {
        @apply bg-[#104438] text-white;
      }

      .icon {
        @apply h-[24px];
      }

    }

    .nav-title {
      p {
        @apply text-sm text-[#515252] font-normal;

       &.activeTitle,
       &:hover {
          @apply text-[#104438] font-semibold tracking-wide;
        }
      }
    }
  }
}


</style>