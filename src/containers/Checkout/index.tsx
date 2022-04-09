import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import { IProduct } from '../../Interfaces/IProduct';
import './Checkout.css';

const Checkout = () => {
    const { state, removeFromCart } = useAppContext();
    const { cart } = state;

    const handleRemove = (product: IProduct) => () => {
        removeFromCart(product);
    };

    const handleSumTotal = () => {
        const reducer = (acumulator: number, currentValue: IProduct) => acumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
                {cart.map((item) => (
                    <div className="Checkout-item" key={item.id}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                        <button type="button" onClick={handleRemove(item)}>
                            <i className="fas fa-trash-alt" title="Eliminar" />
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export { Checkout };
