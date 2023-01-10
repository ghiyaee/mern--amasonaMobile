import { createContext, useReducer } from 'react';
export const Store = createContext();
const initail = {
  cart: { cartItem: [] ,},
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const newItem = action.payload;
      const exitItem = state.cart.cartItem.find((f) => f._id === newItem._id);
      const cartItem = exitItem
        ? state.cart.cartItem.map((item) =>
            item._id === exitItem._id ? newItem : item
          )
        : [...state.cart.cartItem, newItem];
      return {
        ...state,
        cart: { ...state.cart, cartItem },
      };
    case 'CART_REMOVE_ITEM': {
      const cartItem = state.cart.cartItem.filter(
        (f) => f._id !== action.payload._id
      );
      return { ...state, cart: { ...state.cart, cartItem } };
    }
    default:
      return state;
  }
};
export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initail);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
