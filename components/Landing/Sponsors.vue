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
    <div class="mt-3 lg:mt-6">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in sponsors" :key="index">
            <a :href="item.url" rel="noopener noreferrer" target="_blank">
              <img provider="static" :src="item.src" :alt="item.alt"
            /></a>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </client-only>
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
          url: 'https://www.linode.com/',
        },
        {
          src: 'https://via.placeholder.com/512x512',
          alt: 'Sponsor',
        },
      ],
      swiperOption: {
        slidesPerView:
          this.$screen.breakpoint === 'xs'
            ? 1
            : this.$screen.breakpoint === 'sm'
            ? 2
            : 4,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style post>
.swiper {
  height: 300px;
  width: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #f97316;
}
.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
</style>
