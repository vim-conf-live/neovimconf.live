import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import HeroSection from 'components/HeroSection';
import Link from 'next/link';
import Image from 'next/future/image';

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
        className="mt-16 flex w-full flex-1 flex-col items-center justify-center
        text-center"
      >
        <div className="grid grid-cols-1 content-center items-center justify-center justify-items-center sm:grid-cols-2">
          <HeroSection />
          <div className="info grid-hero-info grid content-center justify-items-center gap-8 p-4">
            <a
              style={{ cursor: 'pointer' }}
              onClick={() =>
                document.documentElement.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              <Image src="/XMLID-15.svg" alt="Neovim" width={160} height={40} />
            </a>
            <div className="text-8 grid grid-cols-2 gap-4">
              <Link href="/rebranding-rationale">
                <a className="rounded-lg bg-green-500 p-2 transition hover:bg-green-600">
                  The Rebranding Rationale
                </a>
              </Link>
              <Link href="https://forms.gle/hU18jSEWL2r9xmqP9" target="_blank">
                <a
                  target="_blank"
                  className="rounded-lg bg-green-500 p-2 transition hover:bg-green-600"
                >
                  Speaker Signup
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
