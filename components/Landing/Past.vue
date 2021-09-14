<template>
  <div class="p-0 m-0 absolute left-0 top-20 md:top-28 z-40">
    <ul class="absolute w-60 z-10">
      <li
        v-for="(item, index) in past"
        :key="index"
        class=" bg-gray-700 py-2 px-4 transition-all ease-in-out cursor-pointer hover:bg-gray-500 duration-150 list-none ">
        <a class=" text-center font-bold text-md text-white text-under w-full h-full w-60 no-underline"
          :href="item.site"
          target="_blank"
          >{{ item.year }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      past: [
        {
          year: '2020 lectures',
          site: 'https://www.youtube.com/channel/UCPK_UHtbfcWABCi0F0GPG6w',
        },
      ],
    }
  },
}
</script>
