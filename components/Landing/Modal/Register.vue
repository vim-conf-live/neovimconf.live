<template>
  <div
    role="dialog"
    aria-modal="true"
    class="
      fixed
      inset-x-0
      bottom-0
      px-4
      pb-4
      sm:inset-0 sm:flex sm:items-center sm:justify-center
      z-50
    "
  >
    <div class="fixed inset-0">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div
      class="
        overflow-hidden
        transition-all
        transform
        bg-white
        rounded-lg
        shadow-xl
        sm:max-w-lg sm:w-full
      "
      @click.stop
    >
      <form @submit.prevent @submit="register">
        <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div class="flex">
                <fa :icon="['fas', 'ticket-alt']" class="w-6 h-6 mr-2 text-primary-600" />
                <h3 class="text-xl font-medium leading-6 text-primary-500">
                  Register
                </h3>
              </div>

              <div class="my-3"></div>
            </div>
          </div>
          <div class="my-10 sm:ml-12">
            <label for="email" class="text-gray-700 text-sm font-bold mb-2 px-2">
              Email Address
            </label>
            <input
              id="email"
              ref="email"
              type="email"
              placeholder="johndoe@vimconf.com"
              class="
                border
                rounded
                shadow
                text-orange-600
              "
            />
          </div>
          <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="submit"
                :disabled="isRegistering"
                class="
                  inline-flex
                  justify-center
                  w-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  leading-5
                  text-white
                  transition
                  duration-150
                  ease-in-out
                  border
                  rounded-md
                  order-transparent
                  bg-orange-600
                  hover:bg-orange-500
                  focus:outline-none focus:ring
                "
              >
                <span v-if="!isRegistering">Register</span>
                <span v-else>
                  <fa
                    :icon="['fas', 'circle']"
                    class="inline-block w-2 h-2 mr-0.5 text-white -animate-delay-1 animate-bounce"
                  />
                  <fa
                    :icon="['fas', 'circle']"
                    class="inline-block w-2 h-2 mr-0.5 text-white -animate-delay-2 animate-bounce"
                  />
                  <fa
                    :icon="['fas', 'circle']"
                    class="inline-block w-2 h-2 mr-0.5 text-white animate-bounce"
                  />
                </span>
              </button>
            </span>
            <span
              class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="
                  inline-flex
                  justify-center
                  w-full
                  px-4
                  py-2
                  text-base
                  font-medium
                  leading-6
                  text-gray-700
                  transition
                  duration-150
                  ease-in-out
                  bg-white
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  hover:text-gray-500
                  focus:outline-none focus:border-blue-300 focus:ring
                  sm:text-sm sm:leading-5
                "
                @click="hideModal"
                @keydown.esc="hideModal"
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRegistering: false,
    }
  },
  mounted() {
    this.popupItem = this.$refs.background

    // Auto-focus email input
    const emailInput = this.$refs.email;
    emailInput.focus();

    const close = (e) => {
      const ESC = 27
      if (e.keyCode !== ESC) return
      this.hideModal()
    }
    this.scrollPosition = window.pageYOffset

    /**
     * Disable scrolling
     */
    const $body = document.querySelector('body')
    $body.style.overflow = 'hidden'
    $body.style.position = 'fixed'
    $body.style.top = `-${this.scrollPosition}px`
    $body.style.width = '100%'

    document.addEventListener('keyup', close)
    this.$on('hook:destroyed', () => {
      document.removeEventListener('keyup', close)

      /**
       * Enable  scrolling
       */
      const $body = document.querySelector('body')
      $body.style.removeProperty('overflow')
      $body.style.removeProperty('position')
      $body.style.removeProperty('top')
      $body.style.removeProperty('width')

      window.scrollTo(0, this.scrollPosition)
    })
  },
  methods: {
    async toggleModal() {
      await this.$store.dispatch('modal/TOGGLE_MODAL')
    },
    async hideModal() {
      await this.$store.commit('modal/SET_MODAL', false)
    },
    async register() {
      if (this.isRegistering) {
        return;
      }

      const options = {
        position: "top-center",
        className: "px-6 px-6",
      };

      this.isRegistering = true
      this.$toast.show('Putting you on the list... 🎟️', options)

      try {
        const email = this.$refs.email.value
        await this.$userbase.signUp({
            email,
            username: email,
            password: "vimconf",
            rememberMe: "none",
        })

        this.$toast.clear();
        this.$toast.success("You're going to VimConf 2021! 🎉", {
          ...options,
          duration: 3000,
        })

        await this.hideModal()
      } catch (e) {
        const [code] = e.toString().split(':');

        let message = "Unable to register, please try again later."
        switch (code) {
          case "EmailNotValid":
            message = "Please enter a valid email."
            break;
          case "UsernameAlreadyExists":
            message = "This email has already been registered!"
            break;
        }

        this.$toast.clear();
        this.$toast.error(message, {
          ...options,
          duration: 3000,
        })
      }

      this.isRegistering = false
    },
  },
}
</script>
