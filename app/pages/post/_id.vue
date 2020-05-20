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

const PostFlame = () => import('@/components/Organisms/PostFlame.vue')
const TheBreadcrumbs = () => import('@/components/Organisms/TheBreadcrumbs.vue')

export default Vue.extend({
  components: {
    PostFlame,
    TheBreadcrumbs,
  },
  data() {
    return {
      post: {
        src:
          'https://firebasestorage.googleapis.com/v0/b/dogs-n-dachs.appspot.com/o/IMG_8254.jpg?alt=media&token=b1fe6015-23c9-4ddf-9809-aaff5c67b42b',
        name: 'ロンロン',
        id: 'ZQjAKGPYW57mPYipZB0e',
        comment:
          'コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント',
      },
    }
  },
})
</script>

<style scoped>
.page-container {
  max-width: 600px;
}
</style>
