<template>
  <div class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 pb-6 px-4 sm:px-6 lg:py-16 lg:pb-8 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl uppercase text-center">
        Agenda
      </h2>
      <p class="mt-2 text-center text-base font-semibold uppercase text-gray-200 tracking-wider">
        <a
          :href="$config.agenda.downloadEventCal"
          class="mt-4 text-lg text-gray-300 block"
          >📥 Download the event calendar .ics file</a
        >
        <a
          :href="$config.agenda.addToCal"
          class="mt-6 text-lg text-gray-300 block"
          >🗓️ Add to Google calendar</a
        >
      </p>
    </div>
    <div class="mt-4 mb-4">
      <h3 class="text-2xl font-bold text-white sm:text-2xl text-center">
        The event starts 9am PST on the 29th
      </h3>
      <p class="text-center text-base font-semibold text-gray-200">
        🌟 Start the Hype! 🥳 🌟
      </p>
    </div>
    <div class="google-agenda">
      <iframe
        class="w-full h-96 mx-auto md:w-3/5 md:h-96"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23EF6C00&ctz=America%2FLos_Angeles&mode=AGENDA&showTitle=0&showNav=0&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=Y18wNXMzMTcyYmk0N3VjZWlpNG9raTRwN3NpMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
        style="border: solid 1px #777"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>
<script>
import { agenda } from '../../data/agenda.json'
export default {
  data() {
    return {
      agenda,
    }
  },
}
</script>
