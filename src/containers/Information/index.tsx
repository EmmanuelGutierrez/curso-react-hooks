import React from 'react';
import { Link } from 'react-router-dom';
import './Information.css';
const Information = () => {
    return (
        <div className="Information">
            <main className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <label htmlFor="name">Nombre completo</label>
                        <input type="text" placeholder="Nomber completo" name="name" />
                        <label htmlFor="email">Correo electronico</label>
                        <input type="text" placeholder="Correo electronico" name="email" />
                        <label htmlFor="adress">Direccion</label>
                        <input type="text" placeholder="Direccion" name="address" />
                        <label htmlFor="apto">Apto</label>
                        <input type="text" placeholder="Apto" name="apto" />
                        <label htmlFor="city">Ciudad</label>
                        <input type="text" placeholder="Ciudad" name="city" />
                        <label htmlFor="country">Pais</label>
                        <input type="text" placeholder="Pais" name="country" />
                        <label htmlFor="state">Estado</label>
                        <input type="text" placeholder="Estado" name="state" />
                        <label htmlFor="cp">Codigo postal</label>
                        <input type="text" placeholder="Codigo postal" name="cp" />
                        <label htmlFor="phone">Telefono</label>
                        <input type="text" placeholder="Telefono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">Regresar</div>
                    <Link to="/checkout/payment">
                        <div className="Information-next">Pagar</div>
                    </Link>
                </div>
            </main>
            <aside className="Information-sidebar">
                <h3>Pedido</h3>
                <div className="Information-item">
                    <div className="Information-elelemt">
                        <h4>Item Name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export { Information };
