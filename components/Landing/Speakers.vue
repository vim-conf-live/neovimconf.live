<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="text-3xl font-extrabold text-white sm:text-4xl text-center">
      Our Speakers
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
      Vim enthusiasts span the globe with diverse backgrounds and expertise. We
      are gathering some of the best and brightest to share their experiences to
      enrich the community!
    </p>
    <div class="mt-3 lg:mt-6">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in speakers" :key="index">
            <div class="space-y-6">
              <img
                class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                :src="item.picture"
                :alt="`${item.name} Picture`"
              />
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3 class="text-orange-500">{{ item.name }}</h3>
                  <p class="text-gray-200">Copywriter</p>
                </div>
                <ul class="flex justify-center space-x-5">
                  <li>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">LinkedIn</span>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
import { speakers } from '../../data/speakers.json'
export default {
  data() {
    return {
      speakers,
      swiperOption: {
        autoHeight: true,
        slidesPerView: 4,
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
