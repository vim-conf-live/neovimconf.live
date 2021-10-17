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

    <div v-for="(currentSpeaker, index ) in speakers" :key="index"
      class="speaker-card-container h-100w-auto rounded-2xl mx-auto relative"
      :class="{ open: currentCard !== null && currentCard === index}"
      @click="toggleCard(index)"
    >
      <div class="expand-button absolute top-3 right-3">
        <LandingSvgIconsExpandCard />
      </div>
      <div class="speaker-card bg-white rounded-2xl p-4"
        :class="{ open: currentCard !== null && currentCard === index}"
      >
        <div class="shrink-button absolute top-3 right-3">
          <LandingSvgIconsShrinkCard />
        </div>
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
              <li v-if="currentSpeaker.twitter && currentSpeaker.twitter.length > 2">
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
              <li v-if="currentSpeaker.linkedin && currentSpeaker.linkedin.length > 2">
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
              <li v-if="currentSpeaker.github && currentSpeaker.github.length > 2">
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
              <li v-if="currentSpeaker.website && currentSpeaker.website.length > 2">
                <a
                  :href="currentSpeaker.website"
                  class="text-gray-400 hover:text-gray-500"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="sr-only">Website</span>
                  <LandingSvgIconsWebsite />
                </a>
              </li>
              <li v-if="currentSpeaker.twitch && currentSpeaker.twitch.length > 2">
                <a
                  :href="currentSpeaker.twitch"
                  class="text-gray-400 hover:text-gray-500"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="sr-only">Twitch</span>
                  <LandingSvgIconsTwitch />
                </a>
              </li>
              <li v-if="currentSpeaker.youtube && currentSpeaker.youtube.length > 2">
                <a
                  :href="currentSpeaker.youtube"
                  class="text-gray-400 hover:text-gray-500"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="sr-only">Youtube</span>
                  <LandingSvgIconsYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div
            v-if="currentSpeaker.talk"
            class="talk"
          >
            <h3 v-if="currentSpeaker.talk && currentSpeaker.talk.title && currentSpeaker.talk.title.length > 2"
              class="font-bold text-xl text-gray-100 font-lg"
            >
              {{ currentSpeaker.talk.title }}
            </h3>
            <p v-if="currentSpeaker.talk && currentSpeaker.talk.description && currentSpeaker.talk.description.length > 2">
              {{ currentSpeaker.talk.description }}
            </p>
          </div>

          <div
            v-if="currentSpeaker.talk"
            class="awesome-pictures"
          >
            <p
            >
              {{  }}
            </p>
            <img
              v-if="currentSpeaker.talk && currentSpeaker.talk.picture && currentSpeaker.talk.picture.length > 2"
              :src="currentSpeaker.talk.picture"
              alt="currentSpeaker.talk.title || ''"
              class="w-full"
            >
          </div>
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
        currentCard: null,
        speakers,
        shuffledSpeakers: this.shuffle(speakers),
        isCardOpen: false,
      }
  },
  methods: {
    toggleCard(targetCard) {
      if (this.currentCard !== null) {
        this.currentCard = null;
      } else {
        this.currentCard = targetCard;
      }
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

<style lang="scss" scoped>
  .regular-card {
    width: 100%;
    transition: height 0.3s ease-in-out, width 0.2s ease-in-out;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    color: white;
    font-size: 14px;
  }
  .speaker-card-container {
    width: 100%;
    background-color: transparent;
    color: white;
    display: flex;
    align-items: center;
    .shrink-button {
      display: none;
    }
    .expand-button {
      cursor:pointer;
      display: block;
    }
    .open {
      width: 100%;
      height: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      margin: 0;
      z-index: 99;
      background-color: rgba(31, 41, 55, 0.9);
      background-color: rgba(31, 41, 55, 0.99);
      .expand-button {
        display: none;
      }
      .shrink-button {
        display: block;
      }
    }
  }
  .speaker-card {
    width: 100%;
    transition: height 0.3s ease-in-out, width 0.2s ease-in-out;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    color: white;
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    color: white;
    display: flex;
    align-items: center;

    .card-mod {
      border-bottom: #f97316;
    }
    .card-image {
      height: 115px;
      width: 115px;
      border-radius: 99999px;
      overflow: hidden;
      min-width: 120px;
    }
    .talk {
      margin-top: 1rem;
      text-align: center;
      width: 100%;
      width: 100%;
      height: 100%;
      display: none;
    }
    .awesome-pictures {
      margin-top: 2rem;
      text-align: center;
      width: 100%;
      width: 100%;
      height: 100%;
      display: none;
    }
    &.open {
      cursor:pointer;
      display: block;
      .card-image {
        height: 215px;
        width: 215px;
        margin: 0 auto;
        margin-top: 2rem;
        border-radius: 99999px;
      }
      .card-info {
        margin-top: 2rem;
        text-align: center;
        width: 100%;
        .links {
          display: inline-block;
          text-align: center;
        }
      }
      .talk {
        display: block;
      }
      .awesome-pictures {
        display: block;
      }
      @media (min-width: 980px) {
      }
    }
  }
  .card-info {
    padding: 1px;
    padding-left: 1em;
    .links {
      margin-top: 5px;
      padding: .2rem;
    }
    .general {
      height: 75%;
      .speaker-highlights {
        margin-top: 2px;
      }
      .title {
        color: white;
      }
      .speaker-highlights > a {
        background-color: rgba(234, 88, 12, var(--tw-bg-opacity));
        border-radius: 3px;
        padding: 2px;
        margin-right: .5em;
      }
    }
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

  @media (max-width: 432px) {
    .speakers-container {
      display: grid;
      padding: 10px;
      grid-column-gap: 2px;
      grid-row-gap: 10px;
    }
    .speaker-card-container {
      width: 100%;
    }
    .regular-card {
      width: 100%;
    }
  }
</style>

