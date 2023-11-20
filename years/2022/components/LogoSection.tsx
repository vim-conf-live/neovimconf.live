import Image from 'next/future/image';
import Link from 'next/link';
import { HiIdentification } from 'react-icons/hi';
import { CiCircleCheck } from 'react-icons/ci';

const LogoSection = () => {
  return (
    <div className="info grid-hero-info grid content-center justify-items-center gap-16 sm:p-4 p-4 pt-8">
      <div className="logo">
        <Image
          src="/neovimconf-logo.svg"
          alt="NeovimConf logo"
          width={200}
          height={200}
        />
        <div className="blur"></div>
      </div>
      <div className="flex gap-4">
        <Link href="https://neovimconf.live/lightning">
          <a
            target="_blank"
            className={`flex content-start items-center gap-2 rounded-lg bg-[#42b72a] py-3 px-4
                      text-sm font-bold  transition duration-300 hover:bg-[#0f951a] md:text-lg`}
          >
            Speaker Signup{' '}
            <HiIdentification className="hidden text-4xl lg:inline" />
          </a>
        </Link>

        <Link href="https://neovimconf.live/register">
          <a
            className={`flex content-center items-center gap-2 rounded-lg bg-[#42b72a] py-3 px-8
                      text-sm font-bold transition duration-300 hover:bg-[#0f951a] md:text-lg`}
          >
            Registration{' '}
            <CiCircleCheck className="hidden text-4xl lg:inline" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LogoSection;
