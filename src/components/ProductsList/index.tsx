import React, { useContext } from 'react';
import { AppContext, AppContextType } from '../../context/AppContext';
import { IProduct } from '../../Interfaces/IProduct';
import { Product } from '../Product';
import './ProductsList.css';

/* interface IProductsListProps {
    products: IProduct[];
} */

const ProductsList = () => {
    const { state, addToCart } = useContext(AppContext) as AppContextType;
    const { products } = state;

    const handleAddToCart = (product: IProduct) => () => {
        addToCart(product);
    };

    return (
        <div className="Products">
            <div className="Products-items">
                {products.map((p) => (
                    <Product key={p.id} product={p} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
};

export { ProductsList };
