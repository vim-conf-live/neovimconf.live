import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Link from 'next/link';
import Image from 'next/future/image';
import { HiIdentification } from 'react-icons/hi';

function Home() {
  return (
    <>
      <Head>
        <title>Neovim Conf 2022</title>
      </Head>

      <main
        className="my-16 flex flex-1 flex-col items-center justify-center
        text-center"
      >
        <div className="circuit-background">
          <div className="dim-background grid grid-cols-1 content-center items-center justify-center justify-items-center py-2 sm:grid-cols-2">
            <HeroSection />
            <div className="info grid-hero-info grid content-center justify-items-center gap-16 p-4">
              <div className="logo">
                <Image
                  src="/neovimconf-logo.svg"
                  alt="NeovimConf logo"
                  width={200}
                  height={200}
                />
                <div className="blur"></div>
              </div>
              <div>
                <Link
                  href="https://forms.gle/hU18jSEWL2r9xmqP9"
                  target="_blank"
                >
                
                  <a
                    target="_blank"
                    className={`flex content-center items-center gap-2 rounded-lg bg-[#42b72a] py-3 px-8
                      text-lg font-bold transition duration-300 hover:bg-[#0f951a]`}
                  >
                    Speaker Signup <HiIdentification className="text-4xl" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="last-years-videos mt-20 grid w-full content-center items-center p-4 sm:w-2/3">
          <h2>Watch some last year videos</h2>
          <iframe
            className="youtube-embed"
            src="https://www.youtube.com/embed/Muk6lXGQTwM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="mt-20 mb-8">
            Binge Watch the video playlist for the 2021 talks
          </h2>
          <iframe
            className="youtube-embed"
            src="https://www.youtube.com/embed/videoseries?list=PLcTu2VkAIIWyuX-yNe0KNSPR7wjS2lNKz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
}

export default Home;
