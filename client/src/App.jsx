import React, { useState } from 'react';
import { Navbar } from './components/navbar';
import { Products } from './components/Products';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [showCartPanel, setShowCartPanel] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(null);

  const handleAddToCart = (product) => {
    setCartCount(prevCount => prevCount + 1);
    setShowCartPanel(true);
    setSelectedProducts(product);
  };
  const handleCloseCartPanel = () => {
    setShowCartPanel(false); // Close cart panel
  };



  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <>
      <Navbar 
        cartCount={cartCount} 
        handleSearch={handleSearch} 
      />
      <div className="mt-24">
        <Products 
          handleAddToCart={handleAddToCart} 
          searchInput={searchInput} 
        />
      </div>
      <ShoppingCart 
        isOpen={showCartPanel} 
        selectedProduct={selectedProducts} 
        handleCloseCartPanel={handleCloseCartPanel} 
      /> 
    </>
  );
}

export default App;



