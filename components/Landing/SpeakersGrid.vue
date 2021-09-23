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
    <div v-for="(item, index) in speakers" :key="index"
       class="speaker-card bg-white h-100 p-4 w-auto rounded-2xl mx-auto"
      :class="{ open: isCardOpen}"
      @click="toggleCard()"
      >
      <div class="card-image rounded-full overflow-hidden object-fill">
        <img v-show="item.picture" :src="item.picture"
          alt="item.name || ''"
          class="w-full"
        >
      </div>
      <div class="card-info">
        <div class="general">
          <div class="speaker-name font-bold text-xl text-gray-100 font-lg">{{ item.name }}</div>
          <div class="speaker-job text-gray-400 mb-2 font-xs italic">{{ item.job }}</div>
          <p class="speaker-highlights text-gray-200">
            <a
              v-for="(highlight, highlightIndex) in shuffle(item.highlights || [])"
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
                :href="item.twitter"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Twitter</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                :href="item.linkedin"
                class="text-gray-400 hover:text-gray-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="sr-only">LinkedIn</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"
                  />
                </svg>
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

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
/* function shuffle(a) { */
/*     for (let i = a.length - 1; i > 0; i--) { */
/*         const j = Math.floor(Math.random() * (i + 1)); */
/*         [a[i], a[j]] = [a[j], a[i]]; */
/*     } */
/*     return a; */
/* } */

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

