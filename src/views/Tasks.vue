<template>
  <v-app id="dayspan" v-cloak>
    <ds-calendar-app :calendar="calendar"></ds-calendar-app>
  </v-app>
</template>

<script>
import { Calendar } from 'dayspan'

export default {
  name: 'Tasks',

  data() {
    return {
      calendar: Calendar.months()
    }
  }


}
</script>

<style lang='scss' scoped>

</style>