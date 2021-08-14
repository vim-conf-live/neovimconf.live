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
      <dl
        class="
          mt-8
          space-y-10
          sm:space-y-0
          sm:grid
          sm:grid-cols-2
          sm:grid-rows-4
          sm:grid-flow-col
          sm:gap-x-6
          sm:gap-y-10
          lg:gap-x-8
        "
      >
        <div v-for="(item, index) in agenda" :key="index" class="relative">
          <dt>
            <p class="ml-9 text-lg leading-6 font-medium text-white">
              {{ item.speaker }} | {{ item.title }}
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-100">
            {{ item.desc }}
          </dd>
        </div>
      </dl>
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
