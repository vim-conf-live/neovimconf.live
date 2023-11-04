# NeovimConf 2023

This will give you a quick rundown on how this astro project is structured etc.

Astro truly embraces simplicity. When things in a single component get to
complex (eg. due to asynchronous data-loading), it's recommended to just split
the asynchronous parts into components. Astro supports streaming.

A lot of the fundamental _structure_ is done. The current design breaks in quite
a number of viewport-size/light/dark-combinations (especially mobile needs a lot
of love).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Content

Astro has `content collections` to structure its content. Speakers, Talks and
Schedules are each a collection. Collections can reference items in other
collections.

Collections can be "content" (markdown, mdx) and "data" (yaml, json) and are
explicitely defined in `src/content/config.ts`. Their schema is defined using
Zod and Astro makes sure that all references etc are correct at run- and
build-time.

### Speakers

Anyone who get's a speaker-page, is a speaker. MCs and Keynote speaker too. To
differentiate them, there's a `type` field.

### Talks

Anything that should get a "talks detail page" is a talk. Some still contain
a start/end time, however that is now obsolete and should/can be deleted, as the
schedule is defined in:

### Schedules

Looking at the example JSON should hopefully be self-explanatory. Be aware that
time should be defined in UTC, this way we can display the local time for the
visitor in the client using the `Intl` browser API.

## Components

### SpeakerCard

I've got some plans for this one - it easily breaks in small viewport-sizes, but
don't waste your time fixing it as I intend to rewrite them in a major way so
they work better with different sizes.

## Pages

### Speakers

### talks

Always redirects to either day-1 or day-2. Note that it's intentional to have
each day on their separate page instead of client-side "tabs". Thanks to
view-transitions this feels almost identical - and could be further enhanced
using something like htmx.

This makes deep linking etc much easier - eg on Day 2 directly link to Day
2 from the navigation.

## 👀 Want to learn more about astro?

Check [the astro documentation](https://docs.astro.build).
