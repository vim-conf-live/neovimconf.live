import Card from './Card';
import speakers from '../data/Speakers.js';

const SpeakersSection = () => {
  console.log(speakers);
  return (
    <section className="h-fit">
      <h2 className="my-4 text-[#21ee4b] sm:my-8">Speakers</h2>
      <div className="grid gap-6 md:mx-5 md:grid-cols-2">
        {speakers.map((speaker, index) => {
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
            />
          );
        })}
      </div>
    </section>
  );
};

export default SpeakersSection;
