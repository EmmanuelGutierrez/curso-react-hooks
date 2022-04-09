import { useState } from 'react';
import initialState from '../initialState';
import { IBuyer } from '../Interfaces/IBuyer';
import { IProduct } from '../Interfaces/IProduct';

export type initialStateType = {
    buyer: IBuyer[];
    cart: IProduct[];
    products: IProduct[];
};

export const useInitialState = () => {
    const [state, setState] = useState<initialStateType>(initialState);

    const addToCart = (payload: IProduct) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    };

    const removeFromCart = (payload: IProduct) => {
        setState({
            ...state,
            cart: state.cart.filter((i) => i.id !== payload.id),
        });
    };

    const addBuyer = (payload: IBuyer) => {
        setState({ ...state, buyer: [...state.buyer, payload] });
    };

    return {
        state,
        addToCart,
        removeFromCart,
        addBuyer,
    };
};
