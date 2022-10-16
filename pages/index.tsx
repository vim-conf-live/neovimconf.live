import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';

export default function Home() {
  const [ scrolling, setScrolling ] = useState(false);

  // TO-DO: We need to debounce this
  const handleScroll = useCallback(() => {
    const isScrolling = document.documentElement.scrollTop > 0;
    setScrolling(isScrolling);
  },[]);

  useEffect( () => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200" >
      <Navbar 
        scrolling={scrolling}
        />
      <Head>
        <title>Neovim Conf 2022</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center
        mt-16">
        <h1 className="my-16 text-6xl font-bold">Neovim Conf 2022</h1>
        <p className="text-white w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis felis justo. Nullam feugiat quam ut ipsum viverra imperdiet. Vestibulum imperdiet consectetur dictum. Duis feugiat diam a malesuada convallis. Aenean ut felis consectetur, tristique felis quis, blandit velit. Proin lorem sem, cursus vel fermentum quis, dapibus at erat. Praesent diam nisi, aliquam in augue vel, tempor pulvinar elit. Quisque ut imperdiet enim. Sed volutpat tristique risus. Donec accumsan, nulla rutrum finibus porta, ex ante gravida diam, at venenatis dui nibh eget lacus. Praesent diam leo, ultrices id odio vitae, finibus fringilla felis. In dui arcu, vestibulum in tempor et, maximus in eros. Sed eu tortor nulla. Mauris bibendum ipsum eget tellus laoreet, at tristique elit fringilla.

Donec est ipsum, pellentesque id justo vitae, iaculis ornare eros. In imperdiet feugiat sem, sit amet maximus quam interdum ut. Fusce id scelerisque nisi. Phasellus finibus scelerisque diam. Proin ac luctus odio. Ut at metus eros. Nunc eu faucibus turpis, a accumsan risus. Praesent lorem eros, cursus at neque sed, interdum bibendum erat.

Cras in nisl dapibus, accumsan elit luctus, rhoncus libero. Integer venenatis at enim vitae dapibus. In a felis vitae orci dignissim euismod eget ac justo. Phasellus rutrum mauris nec dui aliquam placerat. Donec semper fringilla dolor vitae fringilla. Phasellus vel elit posuere, euismod orci ac, laoreet massa. Etiam hendrerit faucibus ex sed laoreet. Quisque bibendum quam sit amet nibh vehicula porta. Sed ac feugiat tellus. Nullam sollicitudin efficitur euismod. Nunc a condimentum libero, interdum vestibulum dolor. Nulla rutrum aliquam ex ac aliquet. Aliquam ultrices dolor ut lacus faucibus, et pharetra libero elementum. Phasellus a luctus lectus. Mauris ultricies tincidunt lacus at pharetra.

Integer sapien odio, volutpat non lacus nec, dignissim pulvinar ipsum. Curabitur vitae ultrices quam, vitae tincidunt sem. Sed scelerisque mattis viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum viverra non diam eget condimentum. In imperdiet laoreet rhoncus. Sed nec iaculis metus, vitae egestas tortor. Sed consectetur auctor est vitae pretium. Cras ornare tristique porttitor. Mauris pellentesque orci et erat suscipit scelerisque. Donec accumsan ac tortor eget hendrerit.

Sed ornare libero quis felis cursus suscipit. Phasellus gravida consequat nunc, eget viverra massa pharetra ut. Donec semper tellus et eleifend cursus. Aenean hendrerit eros eget purus lacinia pharetra. Etiam suscipit lorem id ipsum tincidunt, eu aliquet orci semper. Quisque tristique ante quis hendrerit rutrum. Donec ac odio magna. Mauris eget quam in felis ullamcorper suscipit. Ut libero est, sagittis in libero non, aliquet consequat massa. Nullam ipsum enim, lacinia eu commodo vitae, sodales consectetur tortor. Sed sodales vulputate nunc. Suspendisse auctor sem nec massa malesuada tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </main>
    </div>
  );
}
