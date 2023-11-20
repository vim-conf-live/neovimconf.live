import HeroSection from 'components/HeroSection';
import LogoSection from 'components/LogoSection';
import PastVideos from 'components/PastVideos';
import SpeakersSection from 'components/SpeakersSection';

function Speakers() {
  return (
    <>
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
        <PastVideos />
        <SpeakersSection />
      </main>
    </>
  );
}

export default Speakers;
