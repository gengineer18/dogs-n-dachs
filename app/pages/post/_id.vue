<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <v-container class="page-container">
        <v-row class="mb-2">
          <the-breadcrumbs />
        </v-row>
        <v-row dense>
          <v-col>
            <post-flame :post="post" />
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { firebase } from '@/plugins/firebase'

const PostFlame = () => import('@/components/Organisms/PostFlame.vue')
const TheBreadcrumbs = () => import('@/components/Organisms/TheBreadcrumbs.vue')

export default Vue.extend({
  components: {
    PostFlame,
    TheBreadcrumbs,
  },
  async asyncData({ params }) {
    const db = firebase.firestore()
    const post: firebase.firestore.DocumentData | undefined = await db
      .collection('posts')
      .doc(params.id)
      .get()
      .then((doc) => {
        return doc.data()
      })
    return { post }
  },
})
</script>

<style scoped>
.page-container {
  max-width: 600px;
}
</style>
