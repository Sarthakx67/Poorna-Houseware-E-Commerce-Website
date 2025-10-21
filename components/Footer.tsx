
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white mt-auto">
      <div className="container mx-auto p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Poorna Houseware. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
