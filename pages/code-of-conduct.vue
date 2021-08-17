<template>
  <div id="content h-full">
    <div class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <Navigation />

        <div class="mx-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl text-center">
            {{ title }}
          </h2>
          <div class="sm:px-5 lg:px-20">
            <p
              v-for="(paragraph, index) in paragraphs"
              :key="index"
              class="
                my-7
                text-gray-200
                tracking-wider
              "
              >
                {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Code of Conduct",
      paragraphs: [
        "VimConf.Live 2021 Code of Conduct",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi.",
        "Eget egestas purus viverra accumsan in nisl nisi scelerisque. Consectetur a erat nam at lectus urna duis convallis convallis. Sed arcu non odio euismod lacinia at quis. Ut eu sem integer vitae justo. Odio ut sem nulla pharetra diam sit amet nisl.",
        "Lacinia quis vel eros donec ac odio tempor. Non arcu risus quis varius quam quisque. Praesent semper feugiat nibh sed. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Fermentum et sollicitudin ac orci phasellus egestas tellus. Ac felis donec et odio pellentesque diam volutpat. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Imperdiet dui accumsan sit amet nulla. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Ut faucibus pulvinar elementum integer enim. Risus at ultrices mi tempus imperdiet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Tincidunt augue interdum velit euismod.",
        "Blandit libero volutpat sed cras ornare arcu dui. Ac odio tempor orci dapibus ultrices in iaculis nunc. Varius vel pharetra vel turpis nunc eget. Molestie ac feugiat sed lectus vestibulum mattis. Eu turpis egestas pretium aenean pharetra magna. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Gravida dictum fusce ut placerat orci nulla pellentesque. Tempus quam pellentesque nec nam aliquam. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Id aliquet lectus proin nibh nisl condimentum id. At lectus urna duis convallis convallis tellus id interdum.",
      ],
    }
  },
}
</script>
