import React from 'react';

interface QuantityInputProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ quantity, onQuantityChange }) => {
  const handleDecrement = () => {
    onQuantityChange(Math.max(0, quantity - 1));
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      onQuantityChange(value);
    } else if(e.target.value === '') {
      onQuantityChange(0);
    }
  };


  return (
    <div className="flex items-center rounded-lg">
      <button
        onClick={handleDecrement}
        className="bg-slate-200 text-slate-800 hover:bg-slate-300 font-bold w-10 h-10 rounded-l-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className="w-16 h-10 text-center border-t border-b border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary appearance-none [-moz-appearance:textfield]"
        aria-label="Current quantity"
        min="0"
      />
      <button
        onClick={handleIncrement}
        className="bg-slate-200 text-slate-800 hover:bg-slate-300 font-bold w-10 h-10 rounded-r-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;