import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { catalog } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = catalog.find(c => c.slug === categorySlug);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
       <nav aria-label="Breadcrumb" className="text-sm mb-8 text-slate-500 flex items-center space-x-2">
        <Link to="/" className="hover:text-brand-primary hover:underline">Home</Link>
        <span className="text-slate-400">/</span>
        <span className="font-semibold text-brand-primary">{category.name}</span>
      </nav>
      <div className="text-left mb-12">
        <h1 className="text-4xl font-extrabold text-brand-primary mb-2">{category.name}</h1>
        <p className="text-lg text-brand-secondary">Select a product to view details and variants.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {category.items.map((product, index) => (
          <ProductCard key={product.slug} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;