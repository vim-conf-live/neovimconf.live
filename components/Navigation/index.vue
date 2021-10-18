<template>
  <div class="relative py-6 px-4 sm:px-6 lg:px-8">
    <nav class=" relative flex items-center justify-between sm:h-10 lg:justify-start "
      aria-label="Global"
    >
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0" >
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="/">
            <span class="sr-only">Vimconf</span>
            <Logo />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button type="button" class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              :aria-expanded="mobileMenu.isOpen.toString()"
              @click="toggleMobileMenu"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <NavigationMenu :is-open="mobileMenu.isOpen" :links="links" @toggle-mobile-menu="toggleMobileMenu" />
        </div>
      </div>
      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <nuxt-link
          v-for="(item, index) in links"
          :key="index"
          :to="{ path: '/' + item.link }"
          class=" font-medium text-gray-200 hover:text-gray-300 font-roboto "
        >
          {{ item.title }}
        </nuxt-link>

        <a :href="$config.discordInvite"
          class="rounded-md px-3 py-2 font-medium bg-brand-discord text-white hover:opacity-80 z-30 relative"
        >
          Join Discord
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: {
        isOpen: false,
      },
      links: [
        {
          title: 'Lectures',
          link: '#lectures',
        },
        {
          title: 'Speakers',
          link: '#speakers',
        },
        {
          title: 'Agenda',
          link: '#agenda',
        },
        {
          title: 'Sponsors',
          link: '#sponsors',
        },
      ],
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu.isOpen = !this.mobileMenu.isOpen
    },
  },
}
</script>
