import { createContext, useReducer } from 'react';
export const Store = createContext();
const initail = {
  cart: { cartItem: [] },
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItem: [...state.cart.cartItem, action.payload],
        },
      };
    default:
      return state;
  }
};
export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initail);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
