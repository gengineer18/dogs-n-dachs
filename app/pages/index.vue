<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-container class="page-container">
        <v-row dense>
          <v-col v-for="card of 10" :key="card" cols="6">
            <nuxt-link :to="postLink">
              <card-flame :post="post" />
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

const CardFlame = () => import('@/components/Organisms/CardFlame.vue')

export default Vue.extend({
  components: {
    CardFlame,
  },
  data() {
    return {
      post: {
        src:
          'https://firebasestorage.googleapis.com/v0/b/dogs-n-dachs.appspot.com/o/IMG_8254.jpg?alt=media&token=b1fe6015-23c9-4ddf-9809-aaff5c67b42b',
        name: 'ロンロン',
        id: 'ZQjAKGPYW57mPYipZB0e',
      },
    }
  },
  computed: {
    postLink(): string {
      return `post/${this.post.id}`
    },
  },
})
</script>

<style scoped>
.page-container {
  max-width: 600px;
}
</style>
