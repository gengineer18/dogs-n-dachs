<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-container class="page-container" fluid>
        <v-row dense>
          <p>Welcome Dogs'n'Dachs!</p>
          <p>
            ダックスが大好きな飼い主さん、ダックスを飼ってみたい方に向けたダックスの写真共有サイトです。自慢のワンちゃんのお写真を共有してみて下さいね！
          </p>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'redirectHome',
  mounted() {
    window.setTimeout(() => {
      this.$router.push('/home')
    }, 3000)
  },
})
</script>

<style scoped>
.page-container {
  max-width: 600px;
}
</style>
