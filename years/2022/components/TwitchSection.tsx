import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ImTwitch } from 'react-icons/im';

const TwitchSection = () => {
  const [loadImage, setLoadImage] = useState(false);
  useEffect(() => {
    setLoadImage(true);
  }, []);

  return (
    <section className="w-full">
      <h2 className="sm:mb-4">Watch live on Twitch!</h2>
      <h3 className="text-gray-300">
        The conference will be streamed on Twitch and free to the world.
      </h3>
      <div className="image relative mx-auto mt-12 flex h-96 max-w-4xl items-center justify-center ">
        <style jsx>
          {`
            .image:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-image: url(/${loadImage
                ? 'keyboard.jpg'
                : 'keyb-placeholder.jpeg'});
              background-size: cover;
              filter: sepia(100%) saturate(300%) brightness(30%)
                hue-rotate(120deg);
            }
          `}
        </style>
        <Link href="https://www.twitch.tv/theprimeagen">
          <a
            className={`z-10 mx-auto mt-12 inline-flex content-start items-center gap-2 rounded-lg 
                    bg-[#0f74d0] py-3 px-4 text-sm transition
                    duration-300 hover:bg-[#0447BF] md:text-base`}
          >
            <ImTwitch className="text-2xl" />
            <span>Official conference twitch channel</span>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default TwitchSection;
