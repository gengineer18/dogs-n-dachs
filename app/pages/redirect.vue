<template>
  <v-container>
    <v-row align="center" class="redirect-box">
      <v-col>
        <p class="text-center">loading...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  layout: 'redirectHome',
  data() {
    return {
      lineSize: 10,
      fontSize: 18,
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.$router.push('/home')
    }, 500)
  },
})
</script>

<style lang="scss" scoped>
.redirect-box {
  min-height: 100vh;
}
</style>
