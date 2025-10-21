import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from './ImageWithSkeleton';

export interface SmallCardItem {
  to: string;
  name: string;
  image?: string;
}

const SmallCard: React.FC<{ item: SmallCardItem } & React.HTMLAttributes<HTMLAnchorElement>> = ({ item, className }) => {
  return (
    <Link to={item.to} className={`block rounded-lg overflow-hidden shadow hover:shadow-md bg-white ${className ?? ''}`}>
      <div className="w-full bg-slate-100" style={{ aspectRatio: '4 / 3' }}>
        {item.image && (
          <ImageWithSkeleton
            src={item.image}
            alt={item.name}
            className="block w-full h-full object-cover"
            wrapperClassName="w-full h-full"
            loading="lazy"
            decoding="async"
            width={600}
            height={450}
          />
        )}
      </div>
      <div className="p-2 text-sm md:text-base truncate" title={item.name}>{item.name}</div>
    </Link>
  );
};

export default SmallCard;
