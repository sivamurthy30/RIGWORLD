import React from 'react';
import '../styles/scroll-effects.css';
import { useScrollEffects } from '../hooks/useScrollEffects';

const ScrollProgressBar: React.FC = () => {
  const { scrollProgress } = useScrollEffects();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[60]">
      <div 
        className="h-full bg-gradient-to-r from-orange-500 to-orange-600 scroll-progress-bar"
        style={{ 
          width: `${scrollProgress}%`,
          transform: `translateX(${scrollProgress > 0 ? 0 : -100}%)`
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
