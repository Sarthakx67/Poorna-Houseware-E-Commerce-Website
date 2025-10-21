import React, { useEffect, useState } from 'react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scroll = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={scroll}
      className="fixed bottom-20 right-4 md:right-6 z-40 bg-brand-primary text-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg hover:bg-brand-primary-hover"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L6.707 8.707A1 1 0 115.293 7.293l4-4A1 1 0 0110 3z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

export default BackToTop;
