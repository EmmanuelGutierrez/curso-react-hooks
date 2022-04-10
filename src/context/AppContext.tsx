import React, { createContext } from 'react';
import { initialStateType, useInitialState } from '../hooks/useInitialState';
import { IBuyer } from '../Interfaces/IBuyer';
import { IOrder } from '../Interfaces/IOrders';
import { IProduct } from '../Interfaces/IProduct';

export type AppContextType = {
    state: initialStateType;
    addToCart: (payload: IProduct) => void;
    removeFromCart: (payload: IProduct) => void;
    addBuyer: (payload: IBuyer) => void;
    addNewOrder: (payload: IOrder) => void;
};

/* const state = {
    state: { cart: [], products: [] },
}; */

type AppContextProps = {
    children: JSX.Element | JSX.Element;
};

const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: AppContextProps) => {
    const initialState = useInitialState();
    return <AppContext.Provider value={initialState}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
