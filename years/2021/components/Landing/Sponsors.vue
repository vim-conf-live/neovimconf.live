<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="text-3xl font-extrabold text-white sm:text-4xl text-center">
      Sponsors
    </h2>
    <p
      class="
        mt-2
        text-center text-base
        font-semibold
        uppercase
        text-gray-200
        tracking-wider
      "
    >
      We're grateful to have the following sponsors supporting this event and
      vim love globally!
    </p>
    <div class="mt-3 flex justify-between lg:mt-6">
      <div v-for="(item, index) in sponsors" :key="index" class="sponsor-card">
        <a :href="item.url" rel="noopener noreferrer" target="_blank">
          <img class="" provider="static" :src="item.src" :alt="item.alt"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        {
          src: 'https://cdn.discordapp.com/attachments/731764420744839288/877561144569634836/conf.jpg',
          alt: 'Sponsor',
          url: 'https://t.co/JYLmoH7ftf?amp=1',
        },
        {
          src: 'https://cdn.discordapp.com/attachments/731764420744839288/879024918015143984/RGB_-_Linode_-_Square_-_FC_-_BLK2x.png',
          alt: 'Sponsor',
          url: 'http://linode.com/vimconf',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.sponsor-card {
  width: 220px;
  height: 120px;
  img {
    width: 100%;
  }
}
</style>

