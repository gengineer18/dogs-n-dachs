<template>
  <v-card class="card-flame-wrap" hover>
    <image-with-name :src="post.src" :name="post.name" />

    <v-card-actions>
      <counter-heart />
      <counter-star />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

const ImageWithName = () => import('@/components/Molecules/ImageWithName.vue')
const CounterHeart = () => import('@/components/Molecules/CounterHeart.vue')
const CounterStar = () => import('@/components/Molecules/CounterStar.vue')

export default Vue.extend({
  components: {
    ImageWithName,
    CounterHeart,
    CounterStar,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.card-flame-wrap {
  max-width: 300px;
}
</style>
