
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [term, setTerm] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep header input in sync with current ?q= in URL
  const qParam = new URLSearchParams(location.search).get('q') ?? '';
  useEffect(() => {
    setTerm(qParam);
  }, [qParam]);

  // Focus input when mobile search opens
  useEffect(() => {
    if (showMobileSearch) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [showMobileSearch]);

  // Close mobile search when navigating to a different path
  useEffect(() => {
    setShowMobileSearch(false);
  }, [location.pathname]);

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {!isHome && (
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="p-2 rounded-md hover:bg-slate-100 active:bg-slate-200 md:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          <Link to="/" className="text-xl md:text-2xl font-bold text-brand-primary hover:text-brand-primary-hover transition-colors">
            Poorna Houseware
          </Link>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          {/* Mobile search toggle */}
          <button
            type="button"
            className="sm:hidden p-2 rounded-md hover:bg-slate-100 active:bg-slate-200"
            aria-label="Search"
            onClick={() => setShowMobileSearch((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-secondary">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.243 12.072l4.717 4.718a.75.75 0 101.06-1.06l-4.718-4.718A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd" />
            </svg>
          </button>
          {/* Simple search: writes ?q= to the Home URL */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const q = term.trim();
              navigate(`/?q=${encodeURIComponent(q)}`);
              setShowMobileSearch(false);
            }}
            className="hidden sm:block"
          >
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search"
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm w-40 md:w-56"
            />
          </form>
          <Link to="/cart" className="relative group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-brand-secondary group-hover:text-brand-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] md:text-xs font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center animate-pulse">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* Mobile search bar (shown when toggled) */}
      {showMobileSearch && (
        <div className="sm:hidden px-3 pb-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const q = term.trim();
              navigate(`/?q=${encodeURIComponent(q)}`);
              setShowMobileSearch(false);
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search products or categories"
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setShowMobileSearch(false)}
              className="p-2 rounded-md hover:bg-slate-100 active:bg-slate-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;