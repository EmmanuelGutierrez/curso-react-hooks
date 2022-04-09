import { useContext } from 'react';
import { AppContext, AppContextType } from '../context/AppContext';

export const useAppContext = () => {
    return useContext(AppContext) as AppContextType;
};
