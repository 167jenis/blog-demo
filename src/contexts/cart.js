import { createContext, useReducer, useContext } from "react";

const Cart = createContext();

const cartCountReducer = (state, { type, payload }) => {
  console.log("from action", payload);
  switch (type) {
    case 1: {
      return {
        ...state,
        cartCount: {
          recall: payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
export const CartProvider = ({ children }) => {
  const [cartCountState, cartCountDispatch] = useReducer(cartCountReducer, {
    cartCount: {
      recall: 0,
    },
  });

  return (
    <Cart.Provider
      value={{
        cartCountState,
        cartCountDispatch,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export const CartStore = () => useContext(Cart);
