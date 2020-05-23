<template>
  <v-layout column justify-center align-center class="wrapper">
    <v-flex xs12>
      <v-container class="page-container pa-4" fluid>
        <v-row dense>
          <h1 class="mb-4">
            Welcome!<br /><span class="font-logo">Dogs 'n Dachs!</span>
          </h1>
        </v-row>
        <v-row dense>
          <p>
            ダックスが大好きな飼い主さん、<br />ダックスを飼ってみたい方に向けた<br />ダックスフント専門の写真共有サイトです。<br />自慢のワンちゃんのお写真を共有しよう！
          </p>
        </v-row>
        <v-row>
          <v-col>
            <v-btn outlined color="white" nuxt to="/home"
              ><b>自動的にホームに移動しない場合はこちら</b></v-btn
            >
          </v-col>
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
.wrapper {
  margin: 0 auto;
  max-width: 600px;
  min-height: 100vh;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/dogs-n-dachs.appspot.com/o/IMG_8254.jpg?alt=media&token=b1fe6015-23c9-4ddf-9809-aaff5c67b42b');
  background-size: cover;
}
.page-container {
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
}
.font-logo {
  font-weight: 400;
  font-family: 'Lobster', cursive;
  color: white;
}
</style>
