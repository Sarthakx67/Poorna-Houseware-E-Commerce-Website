
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import MobileTabBar from './components/MobileTabBar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Header />
          <main id="main" className="flex-grow container mx-auto p-3 pb-20 md:pb-6 lg:pb-8 md:p-6 lg:p-8 animate-fadeIn">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<AllCategoriesPage />} />
              <Route path="/category/:categorySlug" element={<CategoryPage />} />
              <Route path="/product/:productSlug" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <MobileTabBar />
          <Footer />
          <BackToTop />
        </div>
      </HashRouter>
    </CartProvider>
  );
}

// Scroll to the top on every route change to avoid pages opening mid-scroll
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    // Jump to top on route change to avoid mid-scroll starts
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash, location.search]);
  return null;
};

export default App;