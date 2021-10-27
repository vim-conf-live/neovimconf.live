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
        src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&mode=WEEK&showTz=1&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showTitle=1&title=Vimconf%202021&src=Y18wNXMzMTcyYmk0N3VjZWlpNG9raTRwN3NpMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
        style="border: solid 1px #777"
        width="800"
        height="500"
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
