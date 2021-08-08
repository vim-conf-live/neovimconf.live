<template>
  <div class="relative bg-gray-900 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="
          relative
          z-10
          pb-8
          sm:pb-16
          md:pb-20
          lg:max-w-2xl lg:w-full lg:pb-28
          xl:pb-32
        "
      >
        <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-gray-900
            transform
            translate-x-1/3
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="
                relative
                flex
                items-center
                justify-between
                sm:h-10
                lg:justify-start
              "
              aria-label="Global"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Vimconf</span>
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      class="
                        bg-gray-800
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-200
                        hover:text-gray-400 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                      :aria-expanded="mobileMenu.isOpen.toString()"
                      @click="toggleMobileMenu"
                    >
                      <span class="sr-only">Open main menu</span>
                      <!-- Heroicon name: outline/menu -->
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
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <nuxt-link
                  v-for="(item, index) in links"
                  :key="index"
                  :to="item.link"
                  class="
                    font-medium
                    text-gray-200
                    hover:text-gray-300
                    font-roboto
                  "
                  >{{ item.title }}</nuxt-link
                >

                <a
                  :href="$config.discordInvite"
                  class="
                    rounded-md
                    px-3
                    py-2
                    font-medium
                    bg-brand-discord
                    text-white
                    hover:opacity-80
                  "
                  >Join Discord</a
                >
              </div>
            </nav>
          </div>

          <div
            v-if="mobileMenu.isOpen"
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
            "
          >
            <div
              class="
                rounded-lg
                shadow-md
                bg-white
                ring-1 ring-black ring-opacity-5
                overflow-hidden
              "
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500 hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-500
                    "
                    @click="toggleMobileMenu"
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
                  :to="item.link"
                  class="
                    block
                    px-3
                    py-2
                    rounded-md
                    text-base
                    font-medium
                    text-gray-200
                    hover:text-gray-900 hover:bg-gray-50
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
        </div>

        <main
          class="
            mt-10
            mx-auto
            max-w-7xl
            px-4
            sm:mt-12 sm:px-6
            md:mt-16
            lg:mt-20 lg:px-8
            xl:mt-28
          "
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="
                text-4xl
                tracking-tight
                font-extrabold
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block xl:inline">{{ header.title }}</span>
              <span class="block xl:inline text-orange-500">{{
                header.subTitle
              }}</span>
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-200
                sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                md:mt-5 md:text-xl
                lg:mx-0
              "
            >
              {{ desc }}
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <nuxt-link
                  :to="cta.link"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-white
                    bg-orange-600
                    hover:bg-orange-700
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  {{ cta.title }}
                </nuxt-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  :href="cta2.link"
                  :target="cta2.target"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-orange-700
                    bg-orange-100
                    hover:bg-orange-200
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  {{ cta2.title }}
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="~/assets/img/hero.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: {
        isOpen: false,
      },
      header: {
        title: "Come join the world's first",
        subTitle: 'virtual vim conf',
      },
      desc: "We're bringing together Vimmers from all around the world to connect and share their love and passion for all things vim!",
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
      cta: {
        title: 'Watch the Lectures',
        link: '#lectures',
      },
      cta2: {
        title: 'Be a speaker',
        link: 'https://forms.gle/t3hHEpnoopXmRxaHA',
        target: '_blank',
      },
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu.isOpen = !this.mobileMenu.isOpen
    },
    closeMobileMenu() {
      this.mobileMenu.isOpen = false
    },
  },
}
</script>
