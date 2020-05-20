<template>
  <div>
    <component :is="buttonHeart" @emit-count-up="countUp()" />
    {{ counter }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const ButtonHeartFill = () => import('@/components/Atoms/ButtonHeartFill.vue')
const ButtonHeartOutline = () =>
  import('@/components/Atoms/ButtonHeartOutline.vue')

export default Vue.extend({
  components: {
    ButtonHeartFill,
    ButtonHeartOutline,
  },
  props: {
    counter: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    buttonHeart(): string {
      return this.counter > 0 ? 'ButtonHeartFill' : 'ButtonHeartOutline'
    },
  },
  methods: {
    countUp(): void {
      this.$emit('count-up-heart')
    },
  },
})
</script>

<style lang="scss" scoped></style>
