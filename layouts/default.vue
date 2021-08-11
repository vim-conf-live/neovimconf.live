<template>
  <div>
    <portal to="destination"></portal>
    <div class="bg-gray-900">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>
