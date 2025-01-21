import { useEffect, useState } from 'react';

type TWindowSize = {
  width: number;
  height: number;
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<TWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
