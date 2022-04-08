import React from 'react';
import './Success.css';
const Succes = () => {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Gracias por su compra</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion: </span>
                <div className="Success-map">Google Map</div>
            </div>
        </div>
    );
};

export default Succes;
