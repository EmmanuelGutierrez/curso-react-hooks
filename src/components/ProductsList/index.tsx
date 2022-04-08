import React from 'react';
import { IProduct } from '../../Interfaces/IProduct';
import { Product } from '../Product';
import './ProductsList.css';

interface IProductsListProps {
    products: IProduct[];
}

const ProductsList = (props: IProductsListProps) => {
    const { products } = props;
    return (
        <div className="Products">
            <div className="Products-items">
                {products.map((p) => (
                    <Product key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
};

export { ProductsList };
