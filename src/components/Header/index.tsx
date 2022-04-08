import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <h1 className="Header-title">Conf Merch</h1>
            </Link>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket fa-2x" title="Checkout" />
                </Link>
            </div>
        </div>
    );
};

export { Header };
