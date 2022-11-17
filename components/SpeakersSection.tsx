import Card from './Card';
import speakers from '../data/Speakers.js';
import { useEffect, useState } from 'react';

const SpeakersSection = () => {
  // to solve rehydration issue this state is useful
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // TODO: improve algorithm
  const randomSpeakers = speakers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <section className="h-fit">
      <h2 className="my-4 text-[#21ee4b] sm:my-8">Speakers</h2>
      <div className="grid gap-6 md:mx-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {hydrated &&
          randomSpeakers.map((speaker, index) => {
            return (
              <Card
                key={index}
                name={speaker.name}
                about={speaker.about}
                src={speaker.imagesrc}
                github={speaker.github}
                twitter={speaker.twitter}
                twitch={speaker.twitch}
                website={speaker.website}
                linkedin={speaker.linkedin}
                youtube={speaker.youtube}
                amazon={speaker.amazon}
                matrix={speaker.matrix}
                mastodon={speaker.mastodon}
              />
            );
          })}
      </div>
    </section>
  );
};

export default SpeakersSection;
