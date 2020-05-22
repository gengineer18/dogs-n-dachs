<template>
  <v-btn block color="brown lighten-1" dark @click="clicked()">
    <v-icon left>mdi-dog</v-icon>
    シェアする
    <v-icon right>mdi-pen-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    clicked() {
      this.$emit('emit-clicked')
    },
  },
})
</script>

<style lang="scss" scoped></style>
