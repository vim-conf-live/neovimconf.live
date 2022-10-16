import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';

export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  // TO-DO: We need to debounce this
  const handleScroll = useCallback(() => {
    const isScrolling = document.documentElement.scrollTop > 0;
    setScrolling(isScrolling);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen text-gray-200">
      <Navbar scrolling={scrolling} />
      <Head>
        <title>Neovim Conf 2022</title>
      </Head>

      <main
        className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center
        mt-16"
      >
        <h1
          className="my-16 text-6xl sm:text-8xl xl:text-9xl font-bold
          text-transparent bg-gradient-to-r from-[#1478AA] to-[#5B9636] 
          bg-clip-text
          "
        >
          Neovim&nbsp;Conf 2022
        </h1>

        <div className="font-bold text-white text-5xl sm:text-7xl xl:text-8xl">
          December 9
        </div>
      </main>
    </div>
  );
}
