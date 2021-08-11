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
            <nuxt-img provider="static" :src="item.src" :alt="item.alt" />
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
          src: '/img/sponsors/sponsor-onivim.png',
          alt: 'Onivim Sponsor',
        },
        {
          src: '/img/sponsors/sponsor-vimtricks.png',
          alt: 'VimTricks Sponsor',
        },
        {
          src: '/img/sponsors/sponsor-novetta.png',
          alt: 'Novetta Sponsor',
        },
      ],
      swiperOption: {
        slidesPerView: 3,
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
