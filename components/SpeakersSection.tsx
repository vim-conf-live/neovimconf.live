import Card from './Card';
import speakers from '/data/Speakers.js';

const SpeakersSection = () => {
  console.log(speakers);
  return (
    <section className="h-fit">
      <h2 className="my-4 text-[#21ee4b] sm:my-8">Speakers</h2>
      <div className="grid gap-6 md:mx-5 md:grid-cols-2">
        {speakers.map((speaker) => {
          return (
            <Card
              name={speaker.name}
              src={speaker.imagesrc}
              about={speaker.about}
              github={speaker.github}
              website={speaker.website}
              linkedin={speaker.linkedin}
              amazon={speaker.amazon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SpeakersSection;
