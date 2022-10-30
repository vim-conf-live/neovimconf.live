import { ChangeEvent, useState, useCallback } from 'react';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import JoinDiscordButton from './JoinDiscordButton';

export interface NavbarProps {
  scrolling?: boolean;
}

const Navbar = (props: NavbarProps) => {
  const [email, setEmail] = useState('');
  const { scrolling } = props;

  const handleChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setActiveClass(null);
    if (router.pathname === '/')
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    else router.push('/', undefined, { scroll: false });
  };

  const scrollingClass = scrolling ? 'drop-shadow-md' : '';

  const [activeClass, setActiveClass] = useState(null);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-10
        flex h-16 items-center gap-2 bg-gray-900 px-4
        text-white transition duration-300 sm:gap-8
        ${scrollingClass}`}
    >
      <div
        className="flex cursor-pointer transition duration-300 hover:opacity-70"
        onClick={handleLogoClick}
      >
        <Image
          src="/neovimconf-logo.svg"
          alt="NeovimConf logo"
          width={40}
          height={40}
        />
        <span className="hidden self-center px-3 md:block">NeovimConf</span>
      </div>

      <Link href="/rebranding-rationale">
        <a
          className={`${
            activeClass == 'rebranding' ? 'active' : ''
          } navBarLink cursor-pointer transition duration-300 sm:hover:opacity-70`}
          onClick={() => setActiveClass('rebranding')}
        >
          Rebranding <span className="hidden sm:inline">Rationale</span>
        </a>
      </Link>

      <Link href="/code-of-conduct">
        <a
          className={`
          ${
            activeClass == 'codeofconduct' ? 'active' : ''
          } navBarLink cursor-pointer transition duration-300 sm:hover:opacity-70
          `}
          onClick={() => setActiveClass('codeofconduct')}
        >
          Code Of Conduct
        </a>
      </Link>

      <JoinDiscordButton />
      <div className="hidden items-center space-x-2 text-sm">
        <label htmlFor="email">Register:</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          className={`rounded border border-white/10 bg-white/20
            p-1 outline-none placeholder:text-gray-500`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
