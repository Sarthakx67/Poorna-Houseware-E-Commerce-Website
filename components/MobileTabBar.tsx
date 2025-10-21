import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabLink: React.FC<{ to: string; label: string; icon: React.ReactNode; active: boolean }> = ({ to, label, icon, active }) => (
  <Link
    to={to}
    className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 rounded-lg transition-colors ${
      active ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    {icon}
    <span className="text-xs">{label}</span>
  </Link>
);

const MobileTabBar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/' || path === '';
  const isCategories = path.startsWith('/categories') || path.startsWith('/category');
  const isCart = path.startsWith('/cart');

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-t border-slate-200" role="navigation" aria-label="Primary">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center gap-2">
          <TabLink
            to="/"
            label="Home"
            active={isHome}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 11-1.06 1.06l-.85-.85V19.5A2.25 2.25 0 0017.06 21H6.94A2.25 2.25 0 004.69 18.75v-6.76l-.85.85a.75.75 0 01-1.06-1.06l8.69-8.69z" />
                <path d="M12 5.06L6.19 10.87a.75.75 0 00-.22.53v6.35c0 .414.336.75.75.75h3.56a.75.75 0 00.75-.75v-3.19c0-.414.336-.75.75-.75h2.16c.414 0 .75.336.75.75v3.19c0 .414.336.75.75.75h3.56a.75.75 0 00.75-.75v-6.35a.75.75 0 00-.22-.53L12 5.06z" />
              </svg>
            }
          />
          <TabLink
            to="/categories"
            label="Categories"
            active={isCategories}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3.75 4.5A1.75 1.75 0 015.5 2.75h4A1.75 1.75 0 0111.25 4.5v4a1.75 1.75 0 01-1.75 1.75h-4A1.75 1.75 0 013.75 8.5v-4zM12.75 4.5A1.75 1.75 0 0114.5 2.75h4A1.75 1.75 0 0120.25 4.5v4a1.75 1.75 0 01-1.75 1.75h-4a1.75 1.75 0 01-1.75-1.75v-4zM3.75 14.5A1.75 1.75 0 015.5 12.75h4a1.75 1.75 0 011.75 1.75v4a1.75 1.75 0 01-1.75 1.75h-4A1.75 1.75 0 013.75 18.5v-4zM12.75 14.5A1.75 1.75 0 0114.5 12.75h4a1.75 1.75 0 011.75 1.75v4a1.75 1.75 0 01-1.75 1.75h-4a1.75 1.75 0 01-1.75-1.75v-4z" />
              </svg>
            }
          />
          <TabLink
            to="/cart"
            label="Cart"
            active={isCart}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 3a.75.75 0 000 1.5h1.386c.11 0 .206.072.236.178l.486 1.702A2.25 2.25 0 006.545 7.5H18a.75.75 0 01.685 1.029l-2.25 5.25A2.25 2.25 0 0114.34 15H8.91a2.25 2.25 0 01-2.12-1.5l-1.3-3.9A.75.75 0 004.75 9H3a.75.75 0 010-1.5h1.25l-.25-.875A2.25 2.25 0 003.636 5.2L3.15 3.5A1.75 1.75 0 001.636 2h-.386A.75.75 0 000 2.75.75.75 0 00.75 3.5h.5z" clipRule="evenodd" />
                <path d="M9 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18 20.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileTabBar;
