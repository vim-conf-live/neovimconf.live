import { useState, useEffect, useCallback, ReactNode } from 'react';
import Navbar from 'components/Navbar';

export interface NavbarLayoutProps {
  children: ReactNode;
}

const NavbarLayout = (props: NavbarLayoutProps) => {
  const { children } = props;
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
      {children}
    </div>
  );
};

export default NavbarLayout;
