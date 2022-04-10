import { CreateOrderActions, OnApproveActions, OnApproveData, OrderResponseBody } from '@paypal/paypal-js';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { IOrder } from '../../Interfaces/IOrders';
import { IProduct } from '../../Interfaces/IProduct';
import './Payment.css';
import { config } from '../../config';
import { useNavigate } from 'react-router-dom';

interface IButtonStyle {
    color?: 'blue' | 'silver' | 'white' | 'black' | 'gold';
    height?: number;
    label?: 'paypal' | 'checkout' | 'buynow' | 'pay' | 'installment' | 'subscribe' | 'donate';
    layout?: 'vertical' | 'horizontal';
    shape?: 'rect' | 'pill';
    tagline?: boolean;
}

const Payment = () => {
    console.log(config);
    const { state, addNewOrder } = useAppContext();
    const { cart, buyer } = state;
    const navigate = useNavigate();

    const paypalOptions = {
        'client-id': config.paypal.clientId,
        intent: 'capture',
        currency: 'USD',
    };

    const buttonStyles: IButtonStyle = { layout: 'vertical', shape: 'rect' };

    const handleSumTotal = () => {
        const reducer = (acumulator: number, currentValue: IProduct) => acumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    const handleOrder = (data: Record<string, unknown>, actions: CreateOrderActions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: handleSumTotal().toString(),
                    },
                },
            ],
        });
    };

    const handleApprove = (data: OnApproveData, actions: OnApproveActions) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return actions.order!.capture().then((details: OrderResponseBody) => {
            const newOrder: IOrder = {
                buyer: buyer,
                products: cart,
                payment: details,
            };
            addNewOrder(newOrder);
            navigate('/checkout/succes');
        });
    };

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalScriptProvider options={paypalOptions}>
                        <PayPalButtons
                            style={buttonStyles}
                            createOrder={handleOrder}
                            onApprove={handleApprove}
                            onError={(error) => {
                                console.log(error);
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
};

export { Payment };
