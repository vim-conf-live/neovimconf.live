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
      tabindex="0"
      @keyup.esc="closeCard()"
    >
      <div
        class="expand-button absolute top-3 right-3"
        @click="openCard(index)"
      >
        <LandingSvgIconsExpandCard />
      </div>
      <div class="speaker-card bg-white rounded-2xl p-4"
        :class="{ open: currentCard !== null && currentCard === index}"
      >
        <div
          class="shrink-button absolute top-3 right-3"
          @click="closeCard()"
        >
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
            <p v-if="currentSpeaker.talk && currentSpeaker.talk.description && currentSpeaker.talk.description.length > 2"
              class="talk-description text-gray-400 pt-4 md:max-w-sm md:m-auto"
            >
              {{ currentSpeaker.talk.description }}
            </p>
          </div>

          <div
            v-if="currentSpeaker.talk"
            class="awesome-pictures"
          >
            <div
              v-if="currentSpeaker.talk && currentSpeaker.talk.youtubeEmbedded && currentSpeaker.talk.youtubeEmbedded.length > 2"
              :src="currentSpeaker.talk.youtubeEmbedded"
              alt="currentSpeaker.talk.title || ''"
              @click="loadVideo(currentSpeaker.talk.youtubeEmbedded)"
              class="wrapper w-full"
            >
              <div
                data-embed="currentSpeaker.talk.youtubeEmbedded"
                class="youtube"
              >
                <div
                  v-show="!videoLoaded"
                  class="play-button"></div>
                <div
                  v-show="videoLoaded"
                  v-html="currentVideo"
                >
                </div>
              </div>
            </div>
            <img
              v-if="currentSpeaker.talk && currentSpeaker.talk.picture && currentSpeaker.talk.picture.length > 2"
              :src="currentSpeaker.talk.picture"
              alt="currentSpeaker.talk.title || ''"
              class="w-full"
            />
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
      currentVideo: null,
      videoLoaded: false,
      speakers,
      shuffledSpeakers: this.shuffle(speakers),
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
    openCard(card) {
      this.currentCard = card;
    },
    closeCard() {
      this.currentCard = null;
      this.currentVideo = null;
      this.videoLoaded = false;
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    loadVideo(videoID) {
      this.currentVideo = `<iframe
      src="https://www.youtube.com/embed/${videoID}"
      style="width: 100%; height: 100%;"
      frameborder="0"
      allow="accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture"
      allowfullscreen>
      </iframe>`;

      this.videoLoaded = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  .regular-card {
    width: 100%;
    transition: all 0.3s ease-in-out, width 0.2s ease-in-out;
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
      cursor:pointer;
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
    transition: .3s all ease-in-out;

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
      overflow-y: scroll;
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
      display: block;
      .card-image {
        height: 215px;
        width: 215px;
        margin: 0 auto;
        margin-top: 2rem;
        border-radius: 99999px;
      }
      .card-info {
        margin-top: 1rem;
        text-align: center;
        width: 100%;
        height: -webkit-fill-available;
        height: object-fill;
        overflow-y: auto;
        margin-bottom: 3rem;
        .general {
          height: auto;
        }
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


  // Youtube embed
  .wrapper {
    max-width: 680px;
    margin: 60px auto;
    padding: 0 20px;
  }

  .youtube {
    background-color: #000;
    /* margin-bottom: 30px; */
    position: relative;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      top: -16.82%;
      left: 0;
      opacity: 0.7;
    }
    div > iframe {
      position: relative;
      width: 100%;
    }
    .play-button {
      width: 90px;
      height: 60px;
      background-color: #333;
      box-shadow: 0 0 30px rgba( 0,0,0,0.6 );
      z-index: 1;
      opacity: 0.8;
      border-radius: 6px;
      &:before {
        content: "";
        border-style: solid;
        border-width: 15px 0 15px 26.0px;
        border-color: transparent transparent transparent #fff;
      }
    }
    img, .play-button {
      cursor: pointer;
    }
    iframe {
      margin: 0 auto;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  .youtube {
    width: 100%;
    height: 400px;
    div {
      width: 100%;
      height: 100%;
      display: block;
      > iframe {
        width: 100%;
        height: 100%;
      }
    }
  }

  #speakers > div.speaker-card-container.h-100w-auto.rounded-2xl.mx-auto.relative.open > div.speaker-card.bg-white.rounded-2xl.p-4.open > div.card-info > div.awesome-pictures > div > div > div:nth-child(2) > iframe {
    width: 100%;
    height: 100%;
  }

  .youtube img,
  .youtube iframe,
  .youtube .play-button,
  .youtube .play-button:before {
    position: absolute;
  }
  .youtube .play-button,
  .youtube .play-button:before {
    top: 50%;
    left: 50%;
    transform: translate3d( -50%, -50%, 0 );
  }
</style>

