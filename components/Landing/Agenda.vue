<template>
  <div class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl uppercase text-center">
        Agenda
      </h2>
      <p class="mt-2 text-center text-base font-semibold uppercase text-gray-200 tracking-wider">
        <a
          :href="$config.agenda.downloadEventCal"
          class="mt-4 text-lg text-gray-300 block"
          >📥 Download the event calendar</a
        >
        <a
          :href="$config.agenda.addToCal"
          class="mt-6 text-lg text-gray-300 blck"
          >🗓️ Add to Google calendar</a
        >
      </p>
      <h2 class=" mt-32 text-2xl font-extrabold text-white sm:text-2xl uppercase text-center">
        COMING SOON!
      </h2>
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
