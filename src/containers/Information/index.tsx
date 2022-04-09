import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import { IBuyer } from '../../Interfaces/IBuyer';
import * as joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import './Information.css';

const schema = joi
    .object({
        name: joi.string().required(),
        email: joi.string(),
        adress: joi.string(),
        apto: joi.string(),
        city: joi.string(),
        country: joi.string(),
        state: joi.string(),
        cp: joi.string(),
        phone: joi.number(),
    })
    .messages({
        'string.empty': 'No puede ser un campo vacio',
        'number.empty': 'No puede ser un campo vacio',
        'any.required': 'Es necesario que ingrese un valor',
        'number.base': 'Este valor debe ser un numero',
        'string.base': 'Este valor debe ser un texto',
    });

const Information = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IBuyer>({ resolver: joiResolver(schema) });
    const { state, addBuyer } = useAppContext();
    const { cart } = state;
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IBuyer> = (data) => {
        addBuyer(data);
        navigate('/checkout/payment');
    };

    return (
        <div className="Information">
            <main className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="Information-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Nombre completo</label>
                        <input type="text" placeholder="Nomber completo" {...register('name')} />
                        {<p>{errors.name?.message}</p>}
                        <label htmlFor="email">Correo electronico</label>
                        <input type="text" placeholder="Correo electronico" {...register('email')} />
                        {<p>{errors.email?.message}</p>}
                        <label htmlFor="adress">Direccion</label>
                        <input type="text" placeholder="Direccion" {...register('adress')} />
                        {<p>{errors.adress?.message}</p>}
                        <label htmlFor="apto">Apto</label>
                        <input type="text" placeholder="Apto" {...register('apto')} />
                        {<p>{errors.apto?.message}</p>}
                        <label htmlFor="city">Ciudad</label>
                        <input type="text" placeholder="Ciudad" {...register('city')} />
                        {<p>{errors.city?.message}</p>}
                        <label htmlFor="country">Pais</label>
                        <input type="text" placeholder="Pais" {...register('country')} />
                        {<p>{errors.country?.message}</p>}
                        <label htmlFor="state">Estado</label>
                        <input type="text" placeholder="Estado" {...register('state')} />
                        {<p>{errors.state?.message}</p>}
                        <label htmlFor="cp">Codigo postal</label>
                        <input type="text" placeholder="Codigo postal" {...register('cp')} />
                        {<p>{errors.cp?.message}</p>}
                        <label htmlFor="phone">Telefono</label>
                        <input type="text" placeholder="Telefono" {...register('phone')} />
                        {<p>{errors.phone?.message}</p>}
                        <button type="submit" className="Information-next">
                            Pagar
                        </button>
                    </form>
                </div>
                <div className="Information-buttons">
                    <Link to="/checkout">
                        <div className="Information-back">Regresar</div>
                    </Link>
                </div>
            </main>
            <aside className="Information-sidebar">
                <h3>Pedido</h3>
                {cart.map((item) => (
                    <div className="Information-item" key={item.id}>
                        <div className="Information-elelemt">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
            </aside>
        </div>
    );
};

export { Information };
