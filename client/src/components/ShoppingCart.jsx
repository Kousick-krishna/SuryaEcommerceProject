import React from 'react';

export const ShoppingCart = ({ isOpen, cartItems, handleCloseCartPanel,Add,Sub,count }) => {
  return (
    <div className={`cart-panel ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-72 h-full bg-white overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out`}>
      <div className="cart-header bg-gray-200 p-4 flex justify-between items-center">
        <h2>Shopping Cart</h2>
        <button onClick={handleCloseCartPanel} className="text-gray-600">&times;</button>
      </div>
      <div className="cart-items p-4">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item flex items-center mb-4">
            <img src={item.picture} alt={item.name} className="w-16 h-16 mr-4" />
            <div className="item-details">
              <h3 className="font-semibold">{item.name}</h3>
              <div className="quantity-controls flex items-center">
                <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2" onClick={Sub} >-</button>
                <span className="px-2">{count}</span>
                <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full ml-2" onClick={Add}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
