import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Footer} from './components/Footer/Footer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route , Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

        <NavBar />
      
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/:genderId" element={ <ItemListContainer /> } />
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ < Navigate to="/" /> } />
        </Routes>

      
        <Footer />
      
    </BrowserRouter> 
  );
}

export default App;


{/* <div className="App">
  <NavBar />

  <main>
    <ItemListContainer />
    <ItemDetailContainer />
  </main>

  <Footer />
</div> */}