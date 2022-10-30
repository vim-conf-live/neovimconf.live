import Card from './Card';

const SpeakersSection = () => {
  return (
    <section className="mt-16">
      <h2 className="">Speakers</h2>
      <p className="my-4">Coming soon</p>
      <div className="grid gap-6 md:mx-5 md:grid-cols-2">
        <Card
          name="Ms Neovim"
          src="/placeholder.png"
          about="This is a long text to check how the component looks with long text
"
          github="https://www.github.com"
        />
        <Card
          name="Mr VSCode"
          src="/placeholder.png"
          about="Trying to exit vim"
          github="https://www.github.com"
          twitter="https://www.twitter.com"
          twitch="https://www.twitch.com"
          website="https://www.example.com"
          linkedin="https://www.linkedin.com"
          youtube="https://www.youtube.com"
        />
        <Card
          name="Mr NoSocial"
          src="/placeholder.png"
          about="Practicing social media detox"
        />
        <Card name="Anonymous" src="/placeholder.png" about="Powers unknown" />
      </div>
    </section>
  );
};

export default SpeakersSection;
