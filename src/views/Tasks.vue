<template>
  <v-app>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="focus"
        :events="events"
        color="primary"
        @click:event="handleEventClick"
        @click:day="handleDayClick"
      ></v-calendar>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      focus: '',
      events: [],
    };
  },
  methods: {
    handleEventClick({ event }) {
      // Logic to handle event click
    },
    handleDayClick({ date }) {
      // Logic to handle day click
    },
  },
};
</script>

<style>
@import 'vuetify/dist/vuetify.min.css';
</style>
