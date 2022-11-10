import Card from './Card';

const SpeakersSection = () => {
  return (
    <section className="h-fit">
      <h2 className="text-[#21ee4b]">Speakers</h2>
      <p className="my-4">Coming soon</p>
      <div className="grid gap-6 md:mx-5 md:grid-cols-2">
        <Card
          name="THEENA KUMARAGURUNATHAN"
          src="/theena.jpeg"
          about="A relatively recent (Neo)Vim convert, Theena Kumaragurunathan is a novelist-filmmaker and open source software advocate based in Colombo, Sri Lanka. His debut novel _First Utterance_ (*2016*) - a work of speculative fiction inspired by Latin American magic realism, and the post-modernist works of Jorge Luis Borges - received Sri Lanka's National Literary Award in 2017. In his previous life, he was an Advertising and Strategic Communications professional, working in senior creative and management roles across the marketing landscape in his homecountry. He is currently working on a number of projects - the sequel to his debut novel, his debut feature documentary film, as well as a coming-of-age novel set in a Colombo high school in the late 90s. Since falling in love with Vim and NeoVim, he has attempted to incorporate Vim into every aspect of his writing life, often with varying results. When not in front of his computer, he can be found playing sports or hiking. This will be his second time speaking at NeoVim Conf, after his 2021 talk [Writing, Editing and World-Building On Vim](https://www.youtube.com/watch?v=2ORWaIqyj7k&ab_channel=Theena)"
          github="https://github.com/MiragianCycle"
          website="https://theena.net"
          linkedin="https://github.com/MiragianCycle"
          amazon="https://www.amazon.com/First-Utterance-Miragian-Cycles-Book-ebook/dp/B08MBX8GRZ"
        />
      </div>
    </section>
  );
};

export default SpeakersSection;
