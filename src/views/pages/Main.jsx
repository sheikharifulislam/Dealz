import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../components/product details/ProductDetails';
import Home from './Home';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product-details" element={<ProductDetails />} />
        </Routes>
    );
};

export default Main;
