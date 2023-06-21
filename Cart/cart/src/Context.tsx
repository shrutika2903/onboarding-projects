import React, { useContext, useReducer, useEffect, createContext, ReactNode } from 'react';
import cartItems from './Data';
import reducer from './Reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

interface CartItem {
  id: number;
  title: string;
  price: number;
  amount: number;
  img: string;
}

interface AppState {
  loading: boolean;
  cart: CartItem[];
  total: number;
  amount: number;
}

interface AppContextProps {
  clearCart: () => void;
  remove: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  toggleAmount: (id: number, type: 'increase' | 'decrease') => void;
}

const initialState: AppState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const remove = (id: number) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = (id: number) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id: number) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart: CartItem[] = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };

  const toggleAmount = (id: number, type: 'increase' | 'decrease'): void => {
    dispatch({ type: type === 'increase' ? 'INCREASE' : 'DECREASE', payload: id });
  };
  
  
  

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

export { AppContext, AppProvider };
