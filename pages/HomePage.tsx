import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { catalog } from '../data/products';
import { Category } from '../types';
import CategoryStrip from '../components/CategoryStrip';
import CategoryLane from '../components/CategoryLane';
import SmallCard from '../components/SmallCard';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const CategoryCard: React.FC<{ category: Category; index: number }> = ({ category, index }) => (
  <Link 
    to={`/category/${category.slug}`} 
    className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-in-out animate-fadeInUp"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      <ImageWithSkeleton
        src={category.image}
        alt={category.name}
        loading="lazy"
        fetchPriority="low"
        decoding="async"
        wrapperClassName="w-full h-full"
        className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        width={800}
        height={600}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <h3 className="absolute bottom-0 left-0 p-6 text-2xl font-bold text-white">{category.name}</h3>
    </div>
  </Link>
);

const HomePage: React.FC = () => {
  const location = useLocation();
  const q = new URLSearchParams(location.search).get('q')?.toLowerCase().trim() || '';

  const searchResults = q
    ? catalog.flatMap(cat => {
        const results: { to: string; name: string; image?: string }[] = [];
        if (cat.name.toLowerCase().includes(q)) {
          results.push({ to: `/category/${cat.slug}`, name: cat.name, image: cat.image });
        }
        cat.items.forEach(item => {
          if (item.name.toLowerCase().includes(q)) {
            results.push({ to: `/product/${item.slug}`, name: item.name, image: item.image });
          }
        });
        return results;
      })
    : [];

  return (
    <div>
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-5xl font-extrabold text-brand-primary mb-3 md:mb-4 animate-fadeInUp">Your Partner in Quality Houseware</h1>
        <p className="text-base md:text-lg text-brand-secondary max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          Discover our wide range of quality products for every project, big or small.
        </p>
      </div>

      {/* Category chips strip for quick access */}
      <CategoryStrip />

      {/* Search results or featured lanes */}
      {q ? (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-brand-secondary mb-3">Results for "{q}"</h2>
          {searchResults.length === 0 ? (
            <p className="text-slate-600">No matches found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchResults.map(item => (
                <SmallCard key={item.to} item={item} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-6">
          {catalog.slice(0, 3).map((cat, idx) => (
            <CategoryLane
              key={cat.slug}
              title={cat.name}
              items={cat.items.map(p => ({ to: `/product/${p.slug}`, name: p.name, image: p.image }))}
              viewAllTo={`/category/${cat.slug}`}
              priorityFirstN={idx === 0 ? 2 : 0}
            />
          ))}
        </div>
      )}

      {/* Keep the original grid below for full discovery (compact spacing) */}
      {!q && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {catalog.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;