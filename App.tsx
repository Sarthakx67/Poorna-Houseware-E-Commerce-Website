
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8 animate-fadeIn">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categorySlug" element={<CategoryPage />} />
              <Route path="/product/:productSlug" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CartProvider>
  );
}

export default App;