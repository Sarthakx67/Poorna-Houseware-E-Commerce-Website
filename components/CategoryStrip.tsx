import React from 'react';
import { Link } from 'react-router-dom';
import { catalog } from '../data/products';

const CategoryStrip: React.FC = () => {
  return (
    <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-2 -mx-3 px-3 md:mx-0 md:px-0">
      {catalog.map((cat) => (
        <Link
          key={cat.slug}
          to={`/category/${cat.slug}`}
          className="snap-start shrink-0 inline-flex items-center px-3 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm whitespace-nowrap"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryStrip;
