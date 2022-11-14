import Countdown from 'components/Countdown';

const HeroSection = () => {
  return (
    <div className="space-y-4 p-4 sm:space-y-8">
      <h1
        className="
        bg-gradient-to-r from-[#0f74d0] to-[#21ee4b]
        bg-clip-text text-4xl font-bold text-transparent
        sm:text-5xl xl:text-7xl
        "
      >
        NeovimConf 2022
      </h1>

      <h2 className="text-4xl font-bold text-white sm:text-5xl xl:text-8xl">
        Dec 9th/10th
      </h2>

      <div className="countdown-box h-24">
        <Countdown />
      </div>
    </div>
  );
};

export default HeroSection;
