import Link from 'next/link';
import Image from 'next/future/image';

const KeynoteSection = () => {
  return (
    <section>
      <h2 className="my-4 sm:my-8">Keynote</h2>
      <h3 className="mb-8 text-2xl text-gray-300 text-gray-200">
        State of Neovim
      </h3>

      <div
          className="mc-card justify-content-center grid justify-items-center"
          style={{ 
            backgroundImage: `url(/speaker-images/justinkeyes.jpeg)`,
            boxShadow:'none' 
          }}
        >

        <h1>Justin M. Keyes</h1>

        </div>
    </section>
  );
};

export default KeynoteSection;
