<template>
  <v-card class="post-flame-wrap pa-4">
    <image-with-name :src="post.src" :name="post.name" />
    <v-divider class="mt-4" />
    <v-card-actions class="pl-0">
      <counter-heart :counter="counterHeart" @count-up-heart="countUpHeart()" />
      <counter-star :counter="counterStar" @count-up-star="countUpStar()" />
    </v-card-actions>
    <v-card-text class="px-2 py-0">{{ post.comment }}</v-card-text>
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
  data() {
    return {
      counterHeart: 0,
      counterStar: 0,
    }
  },
  methods: {
    countUpHeart(): number {
      return this.counterHeart++
    },
    countUpStar(): number {
      return this.counterStar++
    },
  },
})
</script>

<style lang="scss" scoped>
.post-flame-wrap {
  max-width: 600px;
}
</style>
