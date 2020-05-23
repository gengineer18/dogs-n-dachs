<template>
  <v-app dark>
    <v-content>
      <the-header />
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <the-footer />
  </v-app>
</template>

<script>
const TheHeader = () => import('@/components/Organisms/TheHeader.vue')
const TheFooter = () => import('@/components/Organisms/TheFooter.vue')
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
