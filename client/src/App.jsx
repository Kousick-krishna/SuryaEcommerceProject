import React, { useState } from 'react';
import { Navbar } from './components/navbar';
import { Products } from './components/Products';
import {ShoppingCart} from './components/ShoppingCart';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from './components/Signup';
import Signin from './components/Signin';



function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCartPanel, setShowCartPanel] = useState(false);
  const [count,setCount] = useState(0);
  
  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
    setCartCount(prevCount => prevCount + 1);
   
  };
 
  const handleCloseCartPanel = () => {
    setShowCartPanel(false);
  };


  const handleSearch = (input) => {
    setSearchInput(input);
  };

  const Add = () =>{
    setCount(prev => prev + 1);
  };

  const Sub = () =>{
    setCount(prev => prev - 1);
  }
 
  



  return (
    <div>
    <BrowserRouter>
      <Navbar 
        cartCount={cartCount} 
        handleSearch={handleSearch} 
        onClickCart={() => setShowCartPanel(true)} 
      />
      <Routes>
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<SignUp />} />

      </Routes>
      </BrowserRouter>
      <div className="mt-24">
        <Products 
          handleAddToCart={handleAddToCart} 
          searchInput={searchInput} 
        />
      </div>
      
      <ShoppingCart 
        isOpen={showCartPanel} 
        cartItems={cartItems} 
        handleCloseCartPanel={handleCloseCartPanel} 
        Add={Add}
        Sub={Sub}
        count={count}
        
      /> 
     
    </div>
  );
}

export default App;



