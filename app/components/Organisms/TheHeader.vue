<template>
  <v-app-bar color="brown lighten-1">
    <v-spacer />
    <nuxt-link to="/redirect">
      <v-toolbar-title class="header-title" v-text="title" />
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
</style>
