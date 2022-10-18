import { ChangeEvent, useState, useCallback } from 'react';
import Image from 'next/future/image';

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

  const scrollingClass = scrolling ? 'bg-black' : 'bg-green-500';

  return (
    <nav
      className={`fixed top-0 right-0 left-0 flex
        h-16 items-center justify-between px-4 text-gray-800
        transition duration-300
        ${scrollingClass}`}
    >
      <a
        style={{ cursor: 'pointer' }}
        onClick={() =>
          document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
        }
      >
        <Image
          src="/XMLID-15.svg"
          alt="Neovim"
          className="h-14"
          width={40}
          height={40}
        />
      </a>
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
