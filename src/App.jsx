import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import SearchItem from './components/SearchItem';
import useGetData from './components/useGetData';
import Product from './components/Product';

const App = () => {
  const items = useGetData(); 
  const [data, setData] = useState([]); 
  const [cart, setCart] = useState([]);
console.log(data)
  
useEffect(() => {
    if (items.length > 0) {
      setData(items);
    }
  }, [items]);

  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
