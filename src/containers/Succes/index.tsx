import React from 'react';
import { Map } from '../../components/Map';
import { useAddress } from '../../hooks/useAddress';
import { useAppContext } from '../../hooks/useAppContext';
import './Success.css';
const Succes = () => {
    const { state } = useAppContext();
    const { buyer } = state;
    const location = useAddress(buyer[0].adress);

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer[0] ? buyer[0].name : ''}, Gracias por su compra`}</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion: </span>
                <div className="Success-map">
                    <Map location={location} />
                </div>
            </div>
        </div>
    );
};

export default Succes;
