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
      <h2 className="text-[#0f74d0]">Watch live on Twitch!</h2>
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
          <div
            className={`z-10 flex cursor-pointer items-center space-x-2 rounded bg-white 
            p-2 px-4 font-bold 
            text-gray-800 shadow-lg transition hover:bg-yellow-100`}
          >
            <ImTwitch className="text-5xl" />
            <span>Official conference twitch channel</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TwitchSection;
