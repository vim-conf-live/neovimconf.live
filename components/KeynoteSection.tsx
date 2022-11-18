import Link from 'next/link';
import Image from 'next/future/image';

const KeynoteSection = () => {
  return (
    <section className="w-full">
      <h2 className="text-[#0f74d0] sm:mb-4">Keynote</h2>
      <h3 className="text-gray-300">
        State of Neovim
      </h3>
        <Image
          src="/justinkeyes.jpeg"
          alt="Justin Keyes"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default KeynoteSection;
