<template>
  <div class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2
        class="
          text-3xl
          font-extrabold
          text-white
          sm:text-4xl
          uppercase
          text-center
        "
      >
        Agenda
      </h2>
      <p
        class="
          mt-2
          text-center text-base
          font-semibold
          uppercase
          text-gray-200
          tracking-wider
        "
      >
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
    </div>
    <div class="hidden">
      <FullCalendar :options="calendarOptions" />
    </div>
    <div class="google-agenda">
      <iframe
        class="w-full h-96 md:w-3/5 md:h-96"
        src="https://calendar.google.com/calendar/embed?src=c_05s3172bi47uceii4oki4p7si0%40group.calendar.google.com"
        style="border-width: 0; margin: 0 auto"
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
