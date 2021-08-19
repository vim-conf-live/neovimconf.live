<template>
	<main class="registration-form">
    <form @submit.prevent @submit="register">
	   	<div class="grid grid-cols-12 mt-6 gap-1">
	   		<div class="col-span-7 md:col-span-4">
	   			<label for="email" class="text-sm font-bold mb-2 px-0 text-base text-gray-200">
	   				Email Address
	   			</label>
	   			<input
	   		  	id="email"
	   		  	ref="email"
	   		  	type="email"
            autocomplete="off"
	   		  	placeholder="johndoe@vimconf.com"
	   		  	class="rounded shadow h-12 text-orange-600 firefox-fix"
            @focus="showDisclaimer()"
	   			/>
          <transition name="fade">
	   			  <div v-show="shouldShowDisclaimer" class="block text-gray-200 text-sm italic">
              By registering you agree to our
              <nuxt-link
                :to="'/code-of-conduct'"
                target="_blank"
                class="underline block"
              >
                Code of Conduct
              </nuxt-link>
            </div>
          </transition>
	   		</div>
	   		<div class="pt-6 col-span-5 md:col-span-3">
	   			<button
	   			  type="submit"
	   			  :disabled="isRegistering"
	   			  class="justify-center w-full h-12 px-2 py-2 ext-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-md order-transparent bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring ">
           <span v-if="!isRegistering">Register me!</span>
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
	   		</div>
	   		<div class="pt-6 col-span-12 md:col-span-5 md:pl-6">
	   			<a
	   			  :href="speakerSubmission.link"
	   			  :target="speakerSubmission.target"
	   			  class="block h-12 px-2 py-3 h-12 w-44 text-center border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-200 md:text-lg md:pt-2 ">
	   				<span class="inline-block">{{ speakerSubmission.title }}</span>
            <img class="inline-block w-5 h-5 ml-2 mt-0" src="https://img.icons8.com/ios/50/000000/form.png"/>
	   			</a>
	   		</div>
       </div>
    </form>

	</main>
</template>

<script>
	export default {
		data() {
			return {
        isRegistering: false,
        shouldShowDisclaimer: false,
				speakerSubmission: {
					enabled: true,
					title: 'Be a speaker',
					link: 'https://forms.gle/t3hHEpnoopXmRxaHA',
					target: '_blank',
				},
			}
		},
		methods: {
      showDisclaimer() {
        this.shouldShowDisclaimer = true;
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
   }
	}
</script>
<style scoped>
  .firefox-fix {
    width: -moz-available;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
