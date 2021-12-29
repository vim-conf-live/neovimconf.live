<template>
  <div class="bg-gray-800">
    <div
      class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">{{ $config.watch.header }}</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        {{ $config.watch.subheader }}
      </p>
      <a
        :href="$config.watch.link"
        class="
          mt-8
          w-full
          inline-flex
          items-center
          justify-center
          px-5
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-full
          text-orange-600
          bg-white
          hover:bg-orange-50
          sm:w-auto
        "
      >
        Start Watching
      </a>
      <!-- width="560" height="315" -->
      <div class="youtube">
        <div>
          <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/Muk6lXGQTwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.youtube {
  margin-top: 20px;
  width: 100%;
  height: 400px;
  div {
    width: 100%;
    height: 100%;
    display: block;
    > iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
