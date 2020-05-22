<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-container class="page-container">
        <v-row dense>
          <v-col>
            <the-breadcrumbs />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <h2 class="subtitle-1">
              ご自慢のワンちゃんの写真をシェアしましょう！
            </h2>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                v-model="name"
                filled
                prepend-icon="mdi-dog"
                label="ワンちゃんのお名前は？"
                required
              ></v-text-field>

              <v-file-input
                label="写真を選んでね！"
                filled
                prepend-icon="mdi-camera"
              ></v-file-input>

              <v-textarea
                v-model="comment"
                label="写真について一言！"
                required
                filled
                prepend-icon="mdi-pen"
              ></v-textarea>
            </v-form>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <button-for-upload />
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
// import { firebase } from '@/plugins/firebase'
const TheBreadcrumbs = () => import('@/components/Organisms/TheBreadcrumbs.vue')
const ButtonForUpload = () => import('@/components/Atoms/ButtonForUpload.vue')
// const db = firebase.firestore()

export default Vue.extend({
  components: {
    TheBreadcrumbs,
    ButtonForUpload,
  },
  data() {
    return {
      name: '',
      comment: '',
    }
  },
})
</script>

<style lang="scss" scoped>
.page-container {
  width: 90vw;
  padding: 0;
  max-width: 600px;
}
</style>
