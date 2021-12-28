import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import NavBar from './components/NavBar/NavBar';
import {Banner} from './components/Banner/Banner'
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Footer} from './components/Footer/Footer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './components/Cart/Cart';
import {BrowserRouter, Route , Routes, Navigate} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import { Page404 } from './components/DeadEnds/Page404/Page404';

function App() {

  return (
    <CartProvider>
      <Banner/>
      <BrowserRouter>
          
          <NavBar />
        
          <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="category/:genderId" element={ <ItemListContainer /> } />
            <Route path="item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="cart" element={ <Cart /> } />
            <Route path="checkout" element={ <Checkout /> } />
            {/* <Route path="*" element={ < Navigate to="/" /> } /> */}
            <Route path="*" element={ < Page404 /> } />
          </Routes>

        
          <Footer />
      </BrowserRouter> 
    </CartProvider>
  );
}

export default App;
