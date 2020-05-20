<template>
  <v-btn icon @click="emitCountUp()">
    <v-icon color="amber lighten-1">mdi-star</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    emitCountUp() {
      this.$emit('emit-count-up')
    },
  },
})
</script>

<style lang="scss" scoped></style>
