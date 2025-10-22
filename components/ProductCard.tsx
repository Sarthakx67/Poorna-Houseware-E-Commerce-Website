import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import ImageWithSkeleton from './ImageWithSkeleton';

export const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => (
  <Link 
    to={`/product/${product.slug}`} 
    className="group block bg-white rounded-xl shadow-md md:shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-in-out animate-fadeInUp"
    style={{ animationDelay: `${index * 50}ms` }}
  >
   <div className="relative bg-brand-light" style={{ aspectRatio: '4 / 3' }}>
     <ImageWithSkeleton
       src={product.image}
       alt={product.name}
       loading="lazy"
       fetchPriority="low"
       decoding="async"
       wrapperClassName="w-full h-full"
       className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
       width={800}
       height={600}
       sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
     />
   </div>
    <div className="p-4 md:p-5">
      <h3 className="text-base md:text-lg font-bold text-brand-secondary group-hover:text-brand-primary transition-colors truncate">{product.name}</h3>
      <p className="text-xs md:text-sm text-slate-500 mt-1 h-10 overflow-hidden text-ellipsis">{product.description}</p>
    </div>
  </Link>
);