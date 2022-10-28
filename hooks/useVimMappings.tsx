import { useCallback, useEffect } from 'react';

export default function useVimMappings() {
  const onKeyPress = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'j':
        document.documentElement.scrollBy({ top: 300, behavior: 'smooth' });
        break;
      case 'k':
        document.documentElement.scrollBy({ top: -300, behavior: 'smooth' });
        break;
      case 'g':
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'G':
        document.documentElement.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPress]);
}
