<template>
  <div class="speakers-container">
    <div class="regular-card bg-white h-100 p-4 w-auto rounded-2xl mx-auto">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl text-center">
          Our Speakers
        </h2>
        <p
          class="mt-2 text-xs text-center lg:text-base font-semibold uppercase text-gray-200 tracking-wider">
          Vim enthusiasts span the globe with diverse backgrounds and expertise. We
          are gathering some of the best and brightest to share their experiences to
          enrich the community!
        </p>
    </div>
    <div v-for="(currentSpeaker, index) in speakers" :key="index"
      class="speaker-card bg-white h-100 p-4 w-auto rounded-2xl mx-auto"
      :class="{ open: isCardOpen}"
      @click="toggleCard()"
      >
      <div class="card-image rounded-full overflow-hidden object-fill">
        <img v-show="currentSpeaker.picture" :src="currentSpeaker.picture"
          alt="currentSpeaker.name || ''"
          class="w-full"
        >
      </div>
      <div class="card-info">
        <div class="general">
          <div class="speaker-name font-bold text-xl text-gray-100 font-lg">{{ currentSpeaker.name }}</div>
          <div class="speaker-job text-gray-400 mb-2 font-xs italic">{{ currentSpeaker.job }}</div>
          <p class="speaker-highlights text-gray-200">
            <a
              v-for="(highlight, highlightIndex) in shuffle(currentSpeaker.highlights || [])"
              v-show="highlightIndex == 0"
              :key="highlightIndex"
              target="_blank"
              :href="highlight.url"
              class="badge"
            >
              {{highlight.name}}
            </a>
          </p>
        </div>
        <div class="links">
          <ul class="flex space-x-5">
            <li>
              <a
                :href="currentSpeaker.twitter"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Twitter</span>
                <LandingSvgIconsTwitter />
              </a>
            </li>
            <li>
              <a
                :href="currentSpeaker.linkedin"
                class="text-gray-400 hover:text-gray-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="sr-only">LinkedIn</span>
                <LandingSvgIconsLinkedIn />
              </a>
            </li>
            <li>
              <a
                :href="currentSpeaker.github"
                class="text-gray-400 hover:text-gray-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="sr-only">Github</span>
                <LandingSvgIconsGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { speakers } from '../../data/speakers.json'

export default {
  data() {
    return {
        speakers,
        shuffledSpeakers: this.shuffle(speakers),
        isCardOpen: false,
      }
  },
  methods: {
    toggleCard() {
      // if (this.isCardOpen) {
      //   this.isCardOpen = false;
      // } else {
      //   this.isCardOpen = true;
      // }
    },
    openCard() {
      this.isCardOpen = true;
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
  }
}
</script>
<style scoped>
  .speakers-container {
    min-height: 300px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    padding: 20px;
  }

  .regular-card {
    width: 100%;
    transition: height 0.3s ease-in-out, width 0.2s ease-in-out;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    color: white;
    font-size: 14px;
  }
  .speaker-card {
    width: 100%;
    transition: height 0.3s ease-in-out, width 0.2s ease-in-out;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    color: white;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    display: flex;
    align-items: center;
  }
  .speaker-card.card-mod {
    border-bottom: #f97316;
  }
  .card-image {
    height: 115px;
    width: 115px;
    border-radius: 99999px;
    overflow: hidden;
    min-width: 120px;
  }
  .speaker-card.open {
    width: 90vw;
    height: 85vh;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 0 4vw;
    z-index: 999;
    box-shadow: 0 0 100px rgba(0, 0, 0, .5);
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }
  .speaker-card.open .card-image {
    height: 200px;
    width: 200px;
  }
  .card-info {
    padding: 1px;
    padding-left: 1em;
  }
  .card-info .general {
    height: 75%;
  }
  .card-info .general .title {
    color: white;
  }
  .card-info .general .speaker-highlights {
    margin-top: 2px;
  }
  .card-info .general .speaker-highlights > a {
    background-color: rgba(234, 88, 12, var(--tw-bg-opacity));
    border-radius: 3px;
    padding: 2px;
    margin-right: .5em;
  }
  .card-info .links {
    margin-top: 5px;
    padding: .2rem;
  }

  @media (min-width: 980px) {
    .speakers-container {
      min-height: 300px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      grid-auto-rows: minmax(100px, auto);
      padding: 20px;
    }
  }
</style>

