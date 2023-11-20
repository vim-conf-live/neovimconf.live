import Link from 'next/link';
import Image from 'next/future/image';

const KeynoteSection = () => {
  return (
    <section>
      <h2 className="my-4 sm:my-8">Keynote</h2>
      <article className="m-auto w-4/5 sm:w-1/2">
        <h3 className="mb-8 text-2xl text-gray-300 text-gray-200">
          State of Neovim
        </h3>
        <p className="mb-10 sm:text-xl">
          Justin has guided the Neovim project as a core maintainer since 2014.
          Author of vim-sneak, vim-dirvish, and tree-sitter-vimdoc. Working at
          AWS in Berlin.
        </p>
      </article>
      <div
        className="mc-card justify-content-center m-auto grid justify-items-center"
        style={{
          backgroundImage: `url(/speaker-images/justinkeyes.jpeg)`,
          boxShadow: 'none',
        }}
      >
        <h1>Justin M. Keyes</h1>
      </div>
    </section>
  );
};

export default KeynoteSection;
