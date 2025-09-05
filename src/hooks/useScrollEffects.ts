import { useEffect, useState, useCallback } from 'react';

interface ScrollEffects {
  isScrolled: boolean;
  scrollDirection: 'up' | 'down' | null;
  scrollY: number;
  scrollProgress: number;
}

export const useScrollEffects = (): ScrollEffects => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((currentScrollY / maxScroll) * 100, 100);

    setScrollY(currentScrollY);
    setScrollProgress(progress);
    setIsScrolled(currentScrollY > 10);

    // Determine scroll direction
    if (currentScrollY > scrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < scrollY) {
      setScrollDirection('up');
    }
  }, [scrollY]);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      handleScroll();
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return { isScrolled, scrollDirection, scrollY, scrollProgress };
};
