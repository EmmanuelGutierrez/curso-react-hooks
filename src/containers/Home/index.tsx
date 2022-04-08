import React from 'react';
import { ProductsList } from '../../components/ProductsList';
import initialState from '../../initialState';

const Home = () => {
    return <ProductsList products={initialState.products} />;
};
export default Home;
