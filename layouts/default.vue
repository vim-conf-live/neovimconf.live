<template>
  <div class="bg-gray-900">
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Vimconf.live - The world's virtual vim conference.",
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>
