import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { findProductWithPath } from '../utils/catalog';
import QuantityInput from '../components/QuantityInput';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import FullscreenImage from '../components/FullscreenImage';
import { useCart } from '../context/CartContext';
import { CartItem, Category, Product } from '../types';
import { ProductCard } from '../components/ProductCard';

const ProductPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const mountedAtRef = useRef<number>(Date.now());
  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);
  const openFullscreenSafely = () => {
    // Avoid accidental click-through from navigation: ignore clicks right after mount
    if (Date.now() - mountedAtRef.current < 350) return;
    setShowImage(true);
  };

  const { product, path } = useMemo(() => findProductWithPath(productSlug), [productSlug]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const handleQuantityChange = (variantId: string, quantity: number) => {
    setQuantities(prev => ({ ...prev, [variantId]: quantity }));
  };

  const handleAddToCart = () => {
    let itemsAdded = 0;
    Object.entries(quantities).forEach(([variantId, quantity]) => {
      const numQuantity = Number(quantity);
      if (numQuantity > 0) {
        const variant = product.variants?.find(v => v.id === variantId);
        if (variant) {
          const newItem: CartItem = {
            id: variant.id,
            productName: product.name,
            variantName: variant.name,
            quantity: numQuantity,
          };
          addToCart(newItem);
          itemsAdded++;
        }
      }
    });
    
    if (itemsAdded > 0) {
      setQuantities({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };
  
  const totalSelected = Object.values(quantities).reduce<number>((sum, qty) => sum + (Number(qty) || 0), 0);
  
  const renderBreadcrumbs = () => (
     <nav aria-label="Breadcrumb" className="text-sm mb-6 text-slate-500 flex items-center space-x-2 flex-wrap">
        <Link to="/" className="hover:text-brand-primary hover:underline">Home</Link>
        <span className="text-slate-400">/</span>
      {path.map((item, index) => {
        const isLast = index === path.length - 1;
        // Duck type to check if it's a Category vs Product
        const isCategory = 'items' in item;
        const linkTo = isCategory ? `/category/${item.slug}` : `/product/${item.slug}`;

        return (
          <React.Fragment key={item.slug}>
            {isLast ? (
               <span className="font-semibold text-brand-secondary">{item.name}</span>
            ) : (
              <Link to={linkTo} className="hover:text-brand-primary hover:underline">{item.name}</Link>
            )}
            {!isLast && <span className="text-slate-400">/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );

  // Render a sub-category view if the product has subItems
  if (product.subItems && product.subItems.length > 0) {
    return (
      <div>
        {renderBreadcrumbs()}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-extrabold text-brand-primary mb-2">{product.name}</h1>
          <p className="text-lg text-brand-secondary">{product.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {product.subItems.map((subProduct, index) => (
            <ProductCard key={subProduct.slug} product={subProduct} index={index} />
          ))}
        </div>
      </div>
    );
  }

  // Render the standard product variant selection view
  return (
    <div>
      {renderBreadcrumbs()}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div style={{ aspectRatio: '4 / 3' }} className="relative bg-brand-light group">
              <ImageWithSkeleton
                src={product.image}
                alt={product.name}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover cursor-zoom-in"
                width={1200}
                height={900}
                priority
                decoding="async"
                onClick={openFullscreenSafely}
              />
              {/* View Fullscreen button */}
              <button
                type="button"
                onClick={openFullscreenSafely}
                className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="View image fullscreen"
              >
                View image
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-primary">{product.name}</h1>
            <p className="text-slate-600 mt-3 md:mt-4 text-sm md:text-base">{product.description}</p>
            <div className="mt-8">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-brand-secondary">Select Variants & Quantity</h2>
              <div className="space-y-3 md:space-y-4 max-h-[60vh] md:max-h-96 overflow-y-auto pr-2">
                {product.variants && product.variants.map(variant => (
                  <div key={variant.id} className="flex justify-between items-center bg-brand-light p-3 rounded-lg">
                    <span className="font-medium text-brand-secondary text-sm md:text-base">{variant.name}</span>
                    <QuantityInput 
                      quantity={quantities[variant.id] || 0} 
                      onQuantityChange={(q) => handleQuantityChange(variant.id, q)}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button 
                  onClick={handleAddToCart}
                  disabled={totalSelected === 0}
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  Add to Order ({totalSelected} {totalSelected === 1 ? 'item' : 'items'})
                </button>
                {showSuccess && (
                  <div className="mt-4 text-center text-green-600 font-semibold p-3 bg-green-100 rounded-lg animate-fadeIn">
                    ✓ Items added to your order!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky mobile action bar for quicker checkout */}
      <div className="fixed bottom-0 inset-x-0 md:hidden bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 border-t border-slate-200 p-3 shadow-lg">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="flex-1 text-sm text-slate-600">
            {totalSelected > 0 ? `${totalSelected} item${totalSelected === 1 ? '' : 's'} selected` : 'Select items'}
          </div>
          <button
            onClick={() => {
              if (totalSelected > 0) {
                handleAddToCart();
              }
              navigate('/cart');
            }}
            className="bg-brand-primary text-white font-semibold px-4 py-2 rounded-lg"
          >
            Go to Cart
          </button>
        </div>
      </div>
      {showImage && (
        <FullscreenImage src={product.image} alt={product.name} onClose={() => setShowImage(false)} />
      )}
    </div>
  );
};

export default ProductPage;