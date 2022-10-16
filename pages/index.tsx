import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import HeroSection from 'components/HeroSection';
import DatesSection from 'components/DatesSection';
import ScheduleSection from 'components/ScheduleSection';
import SpeakersSection from 'components/SpeakersSection';

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
        <HeroSection />
        <DatesSection />
        <ScheduleSection />
        <SpeakersSection />
      </main>
    </div>
  );
}
