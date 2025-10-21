import React, { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  fallbackSrc?: string; // fallback image when original fails
}

const ImageWithSkeleton: React.FC<Props> = ({ wrapperClassName, className, onLoad, onError, fallbackSrc = '/assets/images/placeholder.svg', ...imgProps }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName ?? ''}`}>
      {/* Base: placeholder (always visible until real image loads) */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        src={fallbackSrc}
        aria-hidden={loaded ? 'true' : 'false'}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Top: actual image fades in when loaded; if it errors, placeholder remains */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        {...imgProps}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${className ?? ''} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          // keep placeholder; do not toggle loaded
          onError?.(e);
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton;
