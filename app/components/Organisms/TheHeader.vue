<template>
  <v-app-bar color="brown lighten-1">
    <v-spacer />
    <nuxt-link to="/redirect" class="my-2 text-center">
      <v-toolbar-title class="header-title" v-text="title" />
      <v-toolbar-title class="header-subtitle" v-text="subtitle" />
    </nuxt-link>
    <v-spacer />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    title(): string {
      return 'Dogs \'n Dachs'
    },
    subtitle(): string {
      return '- ダックスフント集めました -'
    },
  },
})
</script>

<style lang="scss" scoped>
.header-title {
  font-size: 24px;
  font-weight: 400;
  font-family: 'Lobster', cursive;
  color: white;
}
.header-subtitle {
  font-size: 16px;
  font-weight: 500;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: white;
}
</style>
