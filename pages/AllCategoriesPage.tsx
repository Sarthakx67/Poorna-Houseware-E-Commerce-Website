import React from 'react';
import { catalog } from '../data/products';
import SmallCard from '../components/SmallCard';

const AllCategoriesPage: React.FC = () => {
  const items = catalog.map((c) => ({ to: `/category/${c.slug}`, name: c.name, image: c.image }));

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-extrabold text-brand-primary mb-4">All Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <SmallCard key={item.to} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllCategoriesPage;
