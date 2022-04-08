import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de pedidos</h3>
                <div className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>Item Element</h4>
                        <span>$10</span>
                    </div>
                    <button type="button">
                        <i className="fas fa-trash-alt" title="Eliminar" />
                    </button>
                </div>
            </div>
            <div className="Checkout-sidebar">
                <h3>Precio Total: $10</h3>
                <Link to="/checkout/information">
                    <button type="button">Continuar pedido</button>
                </Link>
            </div>
        </div>
    );
};

export { Checkout };
