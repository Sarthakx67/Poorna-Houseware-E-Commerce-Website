import React from 'react';
import { Link } from 'react-router-dom';
import { catalog } from '../data/products';
import { Category } from '../types';

const CategoryCard: React.FC<{ category: Category; index: number }> = ({ category, index }) => (
  <Link 
    to={`/category/${category.slug}`} 
    className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-in-out animate-fadeInUp"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
      <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <h3 className="absolute bottom-0 left-0 p-6 text-2xl font-bold text-white">{category.name}</h3>
    </div>
  </Link>
);

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-4 animate-fadeInUp">Your Partner in Quality Houseware</h1>
        <p className="text-lg text-brand-secondary max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          Discover our wide range of quality products for every project, big or small.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {catalog.map((category, index) => (
          <CategoryCard key={category.slug} category={category} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;