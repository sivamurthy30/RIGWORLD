import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

interface GoogleAdProps {
  slot: string;
  className?: string;
  height?: string | number;
}

const GoogleAd: React.FC<GoogleAdProps> = ({ slot, className, height }) => {
  useEffect(() => {
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      document.body.appendChild(script);
    }
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  return (
    <div
      className={`bg-yellow-100 border border-yellow-400 rounded-lg p-4 my-4 flex flex-col justify-center items-center ${className || ''}`}
      style={{ height: height || '100%' }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', height: '100%' }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // <-- Replace with your AdSense client ID
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <div className="text-center text-yellow-700 text-xs mt-2">Google Ad Section (temporary highlight)</div>
    </div>
  );
};

export default GoogleAd;
