<template>
  <div
    v-if="isOpen"
    enter="duration-150 ease-out"
    enter-from="opacity-0 scale-95"
    enter-to="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leave-from="opacity-100 scale-100"
    leave-to="opacity-0 scale-95"
    class="
      absolute
      top-0
      inset-x-0
      p-2
      transition
      transform
      origin-top-right
      md:hidden
      rounded-lg
      z-50
    "
  >
    <div
      class="
        rounded-lg
        shadow-md
        bg-gray-800
        ring-1 ring-black ring-opacity-5
        overflow-hidden
      "
    >
      <div class="px-5 pt-4 flex items-center justify-between">
        <div>
          <Logo color="white" />
        </div>
        <div class="-mr-2">
          <button
            type="button"
            class="
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500
              hover:bg-gray-100
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-indigo-500
            "
            @click="$emit('toggle-mobile-menu')"
          >
            <span class="sr-only">Close main menu</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="px-2 pt-2 pb-3 space-y-1">
        <nuxt-link
          v-for="(item, index) in links"
          :key="index"
          :to="{ path: '/' + item.link }"
          class="
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            text-gray-200
            hover:text-gray-900
            hover:bg-gray-50
          "
          >{{ item.title }}</nuxt-link
        >
      </div>
      <a
        href="#"
        class="
          block
          w-full
          px-5
          py-3
          text-center
          font-medium
          text-white
          bg-brand-discord
          hover:opacity-80
        "
      >
        Join Discord
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
