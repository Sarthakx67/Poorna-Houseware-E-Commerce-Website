import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

export const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => (
  <Link 
    to={`/product/${product.slug}`} 
    className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-in-out animate-fadeInUp"
    style={{ animationDelay: `${index * 50}ms` }}
  >
   <div className="relative bg-brand-light" style={{ aspectRatio: '4 / 3' }}>
     <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold text-brand-secondary group-hover:text-brand-primary transition-colors truncate">{product.name}</h3>
      <p className="text-sm text-slate-500 mt-1 h-10 overflow-hidden text-ellipsis">{product.description}</p>
    </div>
  </Link>
);