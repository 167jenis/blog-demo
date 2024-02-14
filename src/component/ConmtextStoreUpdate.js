import React from "react";
import { CartStore } from "../contexts/cart";

const ConmtextStoreUpdate = () => {
  const { cartCountState, cartCountDispatch } = CartStore();
  return (
    <div>
      <button
        onClick={() => {
          cartCountDispatch({
            type: 1,
            payload: 555,
          });
        }}
      >
        click me
      </button>
    </div>
  );
};

export default ConmtextStoreUpdate;
