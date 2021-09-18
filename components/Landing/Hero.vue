<template>
  <div class="relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class=" relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 ">
        <svg class="fancySkew hidden z-20 lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/3"
          fill="currentColor"
          viewBox="0 0 110 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,80 0,100" />
        </svg>

        <Navigation />

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span class="block xl:inline">{{ header.title }}</span>
              <span class="block xl:inline text-orange-500">{{
                header.subTitle
              }}</span>
              <span class="block text-3xl text-orange-400">{{
                header.dateTitle
              }}</span>
            </h1>
            <p class="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {{ desc }}
            </p>
            <LandingRegistration />
          </div>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div v-if="cta.enabled" class="rounded-md shadow">
              <nuxt-link
                :to="cta.link"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10">
                {{ cta.title }}
              </nuxt-link>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="~/assets/img/hero.png"
      />
    </div>
    <portal-target name="showModal">
      <transition name="fade">
        <LandingModalRegister v-if="$store.state.modal.showModal" />
      </transition>
    </portal-target>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        title: "Join the world's ",
        subTitle: 'virtual vim conf',
        dateTitle: 'Oct  29/30th',
      },
      desc: 'Our second annual event is going to be better than ever! Connecting the vim community to share their love and passion for all things vim!',
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
        enabled: false,
        title: 'Watch the Lectures',
        link: '#lectures',
      },
      speakerSubmission: {
        enabled: true,
        title: 'Speak at Vimconf!',
        link: 'https://forms.gle/t3hHEpnoopXmRxaHA',
        target: '_blank',
      },
    }
  },
  methods: {
    async showModal() {
      await this.$store.commit('modal/SET_MODAL', true)
    },
  },
}
</script>
