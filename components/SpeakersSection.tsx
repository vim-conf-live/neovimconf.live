import Card from './Card';
import speakers from '../data/speakers';
import { useEffect, useState } from 'react';

const SpeakersSection = () => {
  // to solve rehydration issue this state is useful
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const sortedSpeakers = speakers
    .map(speaker => ({ priority: speaker.priority ?? 100 + Math.random(), ...speaker }))
    .sort((a, b) => a.priority - b.priority);

  return (
    <section className="h-fit">
      <h2 className="my-4 sm:my-8">Speakers</h2>
      <div className="grid gap-6 md:mx-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {hydrated && sortedSpeakers.map((speaker, i) => <Card key={i} speaker={speaker} /> )}
      </div>
    </section>
  );
};

export default SpeakersSection;
