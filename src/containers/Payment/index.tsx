import React from 'react';
import './Payment.css';
const Payment = () => {
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido</h3>
                <div className="Payment-button">Boton de pago con paypal</div>
            </div>
        </div>
    );
};

export { Payment };
