import React from 'react';

const ShoppingCart = ({ isOpen, selectedProduct, handleCloseCartPanel }) => {
  return (
    <div className={`fixed top-0 right-0 h-full bg-white z-50 overflow-y-auto ${isOpen ? 'w-72' : 'w-0'} transition-all duration-300 ease-in-out`}>
      <div className="p-4">
        <button onClick={handleCloseCartPanel} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        {selectedProduct && (
          <div className="flex flex-col items-center">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-32 h-32 object-cover rounded-lg mb-4" />
            <p className="text-lg font-semibold">{selectedProduct.name}</p>
            <p className="text-gray-600">{selectedProduct.amount}</p>
            <div className="flex mt-4">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg focus:outline-none">-</button>
              <span className="px-4 py-2 bg-gray-200 text-gray-700">{selectedProduct.quantity}</span>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg focus:outline-none">+</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
