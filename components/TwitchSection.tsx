import { useEffect, useState } from 'react';

const TwitchSection = () => {
  const [loadImage, setLoadImage] = useState(false);
  useEffect(() => {
    setLoadImage(true);
  }, []);

  const imageCss = loadImage
    ? `
        .image {
          background-image: url(/keyboard.jpg);
          background-size: cover;
          filter: sepia(100%) saturate(300%) brightness(30%) hue-rotate(120deg);
        }
          `
    : ``;
  console.log('imageCss', imageCss);

  return (
    <section className="w-full">
      <h2 className="text-[#0f74d0]">Join us on Twitch!</h2>
      <div className="image mt-12 h-96 w-full overflow-hidden">
        <style jsx>{imageCss}</style>
      </div>
    </section>
  );
};

export default TwitchSection;
