<template>
  <v-img
    :src="src"
    class="white--text align-end image-margin"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
    max-width="450px"
  >
    <v-card-title class="card-title" v-text="name"></v-card-title>
  </v-img>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.image-margin {
  margin: 0 auto;
}
.card-title {
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
