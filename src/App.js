import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import NavBar from './components/NavBar/NavBar';
import React, { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Footer} from './components/Footer/Footer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './components/Cart/Cart';
import {BrowserRouter, Route , Routes, Navigate} from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
        
          <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="category/:genderId" element={ <ItemListContainer /> } />
            <Route path="item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="cart" element={ <Cart /> } />
            <Route path="*" element={ < Navigate to="/" /> } />
          </Routes>

        
          <Footer />
      </BrowserRouter> 
    </CartProvider>
  );
}

export default App;
