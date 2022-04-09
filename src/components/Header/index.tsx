import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import './Header.css';
const Header = () => {
    const { state } = useAppContext();
    const { cart } = state;
    return (
        <div className="Header">
            <Link to="/">
                <h1 className="Header-title">Conf Merch</h1>
            </Link>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket fa-2x" title="Checkout" />
                </Link>
                {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
            </div>
        </div>
    );
};

export { Header };
