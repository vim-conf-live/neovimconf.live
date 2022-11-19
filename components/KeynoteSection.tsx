import Link from 'next/link';
import Image from 'next/future/image';

const KeynoteSection = () => {
  return (
    <section>
      <h2 className="sm:mb-6">Keynote</h2>
      <h3 className="mb-8 text-2xl text-gray-300 text-gray-200">
        State of Neovim
      </h3>
      <Image
        src="/justinkeyes.jpeg"
        className="rounded-lg shadow"
        alt="Justin Keyes"
        width={300}
        height={300}
      />
      <p>Justin M. Keyes</p>
    </section>
  );
};

export default KeynoteSection;
