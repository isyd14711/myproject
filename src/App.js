import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Routes/Home";
import Products from "./Routes/ProductsComponent";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Cart from "./Routes/Cart";
import SingleProduct from './Components/Products/SingleProduct';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/products/singleproduct' element={<SingleProduct />} />
            </Routes>
        </div>
    );
}

export default App;
