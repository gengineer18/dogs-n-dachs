<template>
  <div>
    <component :is="buttonStar" />
    {{ counter }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const ButtonStarFill = () => import('@/components/Atoms/ButtonStarFill.vue')
const ButtonStarOutline = () =>
  import('@/components/Atoms/ButtonStarOutline.vue')

export default Vue.extend({
  components: {
    ButtonStarFill,
    ButtonStarOutline,
  },
  props: {
    counter: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    buttonStar(): string {
      return this.counter > 0 ? 'ButtonStarFill' : 'ButtonStarOutline'
    },
  },
})
</script>

<style lang="scss" scoped></style>
