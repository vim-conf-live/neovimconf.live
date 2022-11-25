import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import LogoSection from 'components/LogoSection';
import PastVideos from 'components/PastVideos';
import SpeakersSection from 'components/SpeakersSection';
import SponsorsSection from 'components/SponsorsSection';
import TwitchSection from 'components/TwitchSection';
import MCSection from 'components/MCSection';
import KeynoteSection from 'components/KeynoteSection';
import AgendaSection from 'components/AgendaSection';

function Home() {
  return (
    <>
      <Head>
        <title>Neovim Conf 2022</title>
      </Head>

      <main
        className="my-16 flex flex-1 flex-col items-center justify-center
        text-center"
      >
        <div className="circuit-background">
          <div className="dim-background grid grid-cols-1 content-center items-center justify-center justify-items-center py-2 sm:grid-cols-2">
            <HeroSection />
            <LogoSection />
          </div>
        </div>
        <MCSection />
        <KeynoteSection />
        <SpeakersSection />
        <AgendaSection />
        <TwitchSection />
        <SponsorsSection />
        <PastVideos />
      </main>
    </>
  );
}

export default Home;
