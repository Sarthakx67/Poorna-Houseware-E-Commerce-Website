import React, { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  fallbackSrc?: string; // fallback image when original fails
  priority?: boolean; // eager + high priority for LCP images
  enableFormats?: boolean; // try AVIF/WEBP based on filename (only if those files exist)
}

const changeExt = (src: string | undefined, ext: string): string | undefined => {
  if (!src) return src;
  const idx = src.lastIndexOf('.')
  if (idx === -1) return src + ext;
  return src.slice(0, idx) + ext;
};

const ImageWithSkeleton: React.FC<Props> = ({ wrapperClassName, className, onLoad, onError, fallbackSrc = '/assets/images/placeholder.svg', priority = false, enableFormats = false, loading, fetchPriority, ...imgProps }) => {
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

      {/* Loading spinner while real image loads */}
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center" role="status" aria-live="polite">
          <div className="h-8 w-8 rounded-full border-2 border-slate-300 border-t-brand-primary animate-spin"></div>
          <span className="sr-only">Loading image…</span>
        </div>
      )}

      {/* Top: actual image fades in when loaded; if it errors, placeholder remains */}
      <picture className={`absolute inset-0 block`}>
        {enableFormats && (
          <>
            {/* Prefer AVIF/WEBP if files are present in the same folder with different extension
                Note: only enable if those files actually exist; otherwise browsers will not
                fall back on 404. We keep this opt-in via enableFormats=false by default. */}
            <source type="image/avif" srcSet={changeExt(imgProps.src as string, '.avif')} />
            <source type="image/webp" srcSet={changeExt(imgProps.src as string, '.webp')} />
          </>
        )}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          {...imgProps}
          loading={priority ? 'eager' : (loading ?? 'lazy')}
          fetchPriority={priority ? 'high' : (fetchPriority as any ?? 'auto')}
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
      </picture>
    </div>
  );
};

export default ImageWithSkeleton;
