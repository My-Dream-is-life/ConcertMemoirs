import { useState, useEffect, useCallback } from 'react';

export const useSmallLayout = () => {
  const [isSmallLayout, setIsSmallLayout] = useState(false);

  const updatePixelRatio = useCallback(
    (mql: MediaQueryListEvent) => {
      setIsSmallLayout(mql?.matches ?? false);
    },
    [setIsSmallLayout]
  );

  useEffect(() => {
    const mql = window.matchMedia('(width <= 640px)');
    setIsSmallLayout(mql.matches);

    try {
      mql.addEventListener('change', updatePixelRatio);

      return () => {
        mql.removeEventListener('change', updatePixelRatio);
      };
    } catch (error) {
      console.error('small layout error:', error);
      mql.addListener(updatePixelRatio);

      return () => {
        mql.removeListener(updatePixelRatio);
      };
    }
  }, [updatePixelRatio]);

  return isSmallLayout;
};
