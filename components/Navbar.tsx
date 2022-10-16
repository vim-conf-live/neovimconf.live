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
      className={`fixed top-0 right-0 left-0 h-16
        flex items-center px-4 justify-between text-gray-800
        ${scrollingClass}`}
    >
      <Image src="/neovim-logo.svg" alt="Neovim logo" width={160} height={40} />
      <div className="flex items-center space-x-2">
        <label htmlFor="email">Register:</label>
        <input
          type="text"
          placeholder="Your email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          className="rounded p-1 bg-gray-100/10"
        />
      </div>
    </nav>
  );
};

export default Navbar;
