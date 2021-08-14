<template>
  <div class="p-0 m-0 fixed md:left-0 md:top-56 z-40 bottom">
    <ul class="sticky">
      <li
        v-for="(item, index) in past"
        :key="index"
        class="
          bg-gray-700
          py-2
          px-4
          transition-all
          ease-in-out
          cursor-pointer
          hover:bg-gray-500
          duration-150
          list-none
        "
      >
        <a
          class="
            text-center
            font-bold
            text-md text-white text-under
            w-full
            h-full
            no-underline
          "
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
