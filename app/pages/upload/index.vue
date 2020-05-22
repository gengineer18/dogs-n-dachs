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
            <v-form ref="form">
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
                accept="image/*"
                @change="attachImage"
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
            <button-for-upload v-if="!isUploading" @emit-clicked="upload" />
            <v-btn
              v-if="isUploading"
              loading
              block
              color="brown lighten-1"
              dark
            />
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import loadImage from 'blueimp-load-image'
import { firebase } from '@/plugins/firebase'
const TheBreadcrumbs = () => import('@/components/Organisms/TheBreadcrumbs.vue')
const ButtonForUpload = () => import('@/components/Atoms/ButtonForUpload.vue')
const db = firebase.firestore()
const storage = firebase.storage()

export default Vue.extend({
  components: {
    TheBreadcrumbs,
    ButtonForUpload,
  },
  data() {
    return {
      id: '',
      name: '',
      comment: '',
      image: {
        src: '',
        resizedImg: null,
        blob: null,
      },
      isUploading: false,
    }
  },
  methods: {
    async upload() {
      this.isUploading = true
      const docId = await db.collection('posts').doc().id
      const storageRef = storage.ref('images/' + docId)
      await storageRef.put(this.image.blob).then(() => {
        storageRef
          .getDownloadURL()
          .then((downloadURL) => {
            this.src = downloadURL
          })
          .then(() => {
            const postData = {
              id: docId,
              name: this.name,
              comment: this.comment,
              src: this.src,
              counterHeart: 0,
              counterStar: 0,
            }
            console.log('test', postData)
            db.collection('posts')
              .doc(docId)
              .set(postData, { merge: true })
              .then(() => this.$router.push('/home'))
          })
      })
    },
    attachImage(file) {
      console.log('file', file)
      loadImage.parseMetaData(file, (data) => {
        const options = {
          maxHeight: 300,
          maxWidth: 300,
          canvas: true,
        }
        if (data.exif) {
          options.orientation = data.exif.get('Orientation')
        }
        this.displayImage(file, options)
      })
    },
    displayImage(file, options) {
      loadImage(
        file,
        (canvas) => {
          const data = canvas.toDataURL(file.type)
          // data_url形式をblob objectに変換
          const blob = this.base64ToBlob(data, file.type)
          // objectのURLを生成
          const url = window.URL.createObjectURL(blob)
          this.image.blob = blob
          this.image.resizedImg = url
        },
        options
      )
    },
    base64ToBlob(base64, fileType) {
      const bin = atob(base64.replace(/^.*,/, ''))
      const buffer = new Uint8Array(bin.length)
      for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i)
      }
      return new Blob([buffer.buffer], {
        type: fileType || 'image/jpg',
      })
    },
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
