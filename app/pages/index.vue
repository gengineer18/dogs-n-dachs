<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-container class="page-container" fluid>
        <v-row dense>
          <v-col cols="12">
            <nuxt-link to="/upload">
              <button-for-upload />
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col v-for="post in posts" :key="post.id" cols="6">
            <nuxt-link :to="postLink(post.id)">
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
import { firebase } from '@/plugins/firebase'
const CardFlame = () => import('@/components/Organisms/CardFlame.vue')
const ButtonForUpload = () => import('@/components/Atoms/ButtonForUpload.vue')

export default Vue.extend({
  components: {
    CardFlame,
    ButtonForUpload,
  },
  async asyncData() {
    const db = firebase.firestore()
    const posts: firebase.firestore.DocumentData[] = []
    await db
      .collection('posts')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          posts.push(doc.data())
        })
      })
    return { posts }
  },
  computed: {
    postLink() {
      return function (id: string): string {
        return `post/${id}`
      }
    },
  },
})
</script>

<style scoped>
.page-container {
  max-width: 600px;
}
</style>
