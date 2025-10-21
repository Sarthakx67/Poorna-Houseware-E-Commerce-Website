import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import QuantityInput from '../components/QuantityInput';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, itemCount } = useCart();
  const [siteLocation, setSiteLocation] = useState('');

  // IMPORTANT: Replace with your actual business WhatsApp number (including country code, no '+')
  const WHATSAPP_NUMBER = "919711074073"; 

  const handleSendToWhatsApp = () => {
    if (itemCount === 0) return;

    // Group items by product name for a cleaner message format
    // FIX: Explicitly type the initial value for the reducer to ensure correct type inference for `groupedItems`.
    const groupedItems = cartItems.reduce((acc, item) => {
      if (!acc[item.productName]) {
        acc[item.productName] = [];
      }
      acc[item.productName].push({ variantName: item.variantName, quantity: item.quantity });
      return acc;
    }, {} as Record<string, { variantName: string; quantity: number }[]>);

    let message = `*Hi Poorna Houseware,*\n\nI would like to place an order for the following items:\n`;
    
    // FIX: Replaced Object.entries().forEach with a for...of loop over Object.keys(). This resolves a type inference issue where `variants` was `unknown`, causing the '.forEach' property access to fail.
    for (const productName of Object.keys(groupedItems)) {
      const variants = groupedItems[productName];
      message += `\n*${productName}*\n`;
      variants.forEach(variant => {
        message += `  • *${variant.quantity}x* - ${variant.variantName}\n`;
      });
    }

    if (siteLocation) {
      message += `\n*Site Location / Name:* ${siteLocation}\n`;
    }
    
    message += `\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold text-brand-primary mb-6 md:mb-8 text-center">Your Order</h1>
      {itemCount === 0 ? (
        <div className="text-center py-10">
          <p className="text-brand-secondary text-base md:text-lg mb-6">Your order is empty.</p>
          <Link to="/" className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-3 px-5 rounded-lg transition-colors shadow-lg hover:shadow-xl">
            Continue Browsing
          </Link>
        </div>
      ) : (
        <>
          <div className="divide-y divide-slate-200">
            {cartItems.map(item => (
              <div key={item.id} className="py-3 md:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
                <div className="flex-grow">
                  <p className="font-bold text-brand-secondary text-sm md:text-base">{item.productName}</p>
                  <p className="text-xs md:text-sm text-slate-500">{item.variantName}</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
                   <QuantityInput 
                      quantity={item.quantity} 
                      onQuantityChange={(q) => updateQuantity(item.id, q)} 
                    />
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 transition-colors" aria-label={`Remove ${item.productName}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8 border-t pt-6 md:pt-8">
            <label htmlFor="siteLocation" className="block text-base md:text-lg font-semibold text-brand-secondary mb-2">
              Site Location / Name (Optional)
            </label>
            <input
              type="text"
              id="siteLocation"
              value={siteLocation}
              onChange={(e) => setSiteLocation(e.target.value)}
              placeholder="e.g., Green Valley Project, Sector 5"
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white text-slate-800"
            />
          </div>
          <div className="mt-6 md:mt-8 text-center">
             <button 
                onClick={handleSendToWhatsApp}
                className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-5 rounded-lg transition-all duration-300 flex items-center justify-center text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.121l-1.258 4.605 4.753-1.242z" /></svg>
                Place Order
              </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;