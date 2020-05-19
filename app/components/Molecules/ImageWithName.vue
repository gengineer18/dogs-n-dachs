<template>
  <v-img
    :src="src"
    class="white--text align-end"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
    width="300px"
  >
    <v-card-title v-text="name"></v-card-title>
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

<style lang="scss" scoped></style>
