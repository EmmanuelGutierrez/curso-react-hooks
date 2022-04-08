import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Checkout } from '../containers/Checkout';
import Home from '../containers/Home';
import { Information } from '../containers/Information';
import NotFound from '../containers/NotFound';
import { Payment } from '../containers/Payment';
import Succes from '../containers/Succes';
import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/checkout/information" element={<Information />} />
                    <Route path="/checkout/payment" element={<Payment />} />
                    <Route path="/checkout/succes" element={<Succes />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
