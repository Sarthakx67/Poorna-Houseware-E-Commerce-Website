import React, { useEffect } from 'react';

interface FullscreenImageProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ src, alt = '', onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center" role="dialog" aria-modal>
      <button
        aria-label="Close image"
        className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
        onClick={onClose}
      >
        ✕
      </button>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        src={src}
        alt={alt}
        className="max-w-[95vw] max-h-[90vh] object-contain cursor-zoom-out"
        onClick={onClose}
      />
    </div>
  );
};

export default FullscreenImage;
