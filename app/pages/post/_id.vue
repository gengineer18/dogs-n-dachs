<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <v-container class="page-container">
        <v-row class="mb-2">
          <the-breadcrumbs />
        </v-row>
        <v-row dense>
          <v-col>
            <post-flame
              :post="post"
              @emit-update="updateLikes($event, likes)"
            />
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

type Likes = {
  id: string
  heart: number
  star: number
  updatedAt: firebase.firestore.FieldValue
}
const db = firebase.firestore()

export default Vue.extend({
  components: {
    PostFlame,
    TheBreadcrumbs,
  },
  async asyncData({ params }) {
    const post: firebase.firestore.DocumentData | undefined = await db
      .collection('posts')
      .doc(params.id)
      .get()
      .then((doc) => {
        return doc.data()
      })
    return { post }
  },
  data() {
    return {
      likes: {},
    }
  },
  methods: {
    updateLikes(likes: Likes) {
      console.log('update', likes)
      const likesData = likes
      db.collection('posts').doc(likes.id).set(likesData, { merge: true })
    },
  },
})
</script>

<style scoped>
.page-container {
  max-width: 600px;
}
</style>
