<template>
  <p>load</p>
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

<style lang="scss" scoped></style>
