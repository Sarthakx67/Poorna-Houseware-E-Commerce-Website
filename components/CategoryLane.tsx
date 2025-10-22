import React from 'react';
import { Link } from 'react-router-dom';
import SmallCard, { SmallCardItem } from './SmallCard';

const CategoryLane: React.FC<{ title: string; items: SmallCardItem[]; viewAllTo?: string; priorityFirstN?: number }>
= ({ title, items, viewAllTo, priorityFirstN = 0 }) => {
  if (!items || items.length === 0) return null;
  return (
    <section className="mb-8">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-lg md:text-xl font-semibold text-brand-secondary">{title}</h2>
        {viewAllTo && (
          <Link to={viewAllTo} className="text-sm text-brand-primary hover:underline">View all</Link>
        )}
      </div>
      <div className="flex overflow-x-auto gap-3 snap-x snap-mandatory -mx-1 px-1">
        {items.map((it, idx) => (
          <SmallCard key={it.to} item={it} priority={idx < priorityFirstN} className="min-w-[150px] md:min-w-[180px] snap-start" />
        ))}
      </div>
    </section>
  );
};

export default CategoryLane;
