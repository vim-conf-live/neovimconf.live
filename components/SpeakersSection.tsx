import Card from './Card';

const SpeakersSection = () => {
  return (
    <section className="h-fit">
      <h2 className="my-4 sm:my-8 text-[#21ee4b]">Speakers</h2>
      <div className="grid gap-6 md:mx-5 md:grid-cols-2">
        <Card
          name="Theena Kumaragurunathan"
          src="/theena.jpeg"
          about="A relatively recent (Neo)Vim convert, Theena Kumaragurunathan is a novelist-filmmaker and open source software advocate based in Colombo, Sri Lanka. His debut novel _First Utterance_ (*2016*) - a work of speculative fiction inspired by Latin American magic realism, and the post-modernist works of Jorge Luis Borges - received Sri Lanka's National Literary Award in 2017. In his previous life, he was an Advertising and Strategic Communications professional, working in senior creative and management roles across the marketing landscape in his homecountry. He is currently working on a number of projects - the sequel to his debut novel, his debut feature documentary film, as well as a coming-of-age novel set in a Colombo high school in the late 90s. Since falling in love with Vim and NeoVim, he has attempted to incorporate Vim into every aspect of his writing life, often with varying results. When not in front of his computer, he can be found playing sports or hiking. This will be his second time speaking at NeoVim Conf, after his 2021 talk [Writing, Editing and World-Building On Vim](https://www.youtube.com/watch?v=2ORWaIqyj7k&ab_channel=Theena)"
          github="https://github.com/MiragianCycle"
          website="https://theena.net"
          linkedin="https://github.com/MiragianCycle"
          amazon="https://www.amazon.com/First-Utterance-Miragian-Cycles-Book-ebook/dp/B08MBX8GRZ"
        />
        <Card
          name="Fidel H Viegas"
          src="/FidelHViegasProfile.jpg"
          about="Fidel H Viegas works as CTO and Lead Programmer at Metagnosis. From an early age, he understood that resourcefulness was synonymous with restrictions and limitations. Unable to get games for his Amstrad CPC 464, he learned to program in BASIC from the manual. Later, discovering that BASIC existed in different dialects, he learned to translate between them. Throughout his career, he developed several systems: ERPs, CMSs, decompilers, binary file converters, and transpilers. He also has experience reverse engineering binary file formats and computer software, an expertise he used to recover the source code of his employer's ERP. He is also working independently on a VimScript to Lua transpiler, and recently joined the Modula-2 Software Foundation to work on a bootstrap compiler for the revised Modula-2 language."
        />
         <Card
          name="Björn Linse"
          src="/bfredl.jpg"
          about="Björn Linse is an independent software developer and part of the Neovim core team. He is currently working full-time for the Neovim project"
          website="https://matrix.to/#/@bfredl:matrix.org"
          twitter="https://twitter.com/bfredlbfredl"
        />
      </div>
    </section>
  );
};

export default SpeakersSection;
