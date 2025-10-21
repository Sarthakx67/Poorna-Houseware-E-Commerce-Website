import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { findProductWithPath } from '../utils/catalog';
import QuantityInput from '../components/QuantityInput';
import { useCart } from '../context/CartContext';
import { CartItem, Category, Product } from '../types';
import { ProductCard } from '../components/ProductCard';

const ProductPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { addToCart } = useCart();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [showSuccess, setShowSuccess] = useState(false);

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
            <img src={product.image} alt={product.name} className="w-full h-64 md:h-full object-cover"/>
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-brand-primary">{product.name}</h1>
            <p className="text-slate-600 mt-4">{product.description}</p>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-brand-secondary">Select Variants & Quantity</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {product.variants && product.variants.map(variant => (
                  <div key={variant.id} className="flex justify-between items-center bg-brand-light p-3 rounded-lg">
                    <span className="font-medium text-brand-secondary">{variant.name}</span>
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
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
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
    </div>
  );
};

export default ProductPage;