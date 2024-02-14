import React from "react";
import { CartStore } from "../contexts/cart";

const ConmtextStoreGet = () => {
  const { cartCountState } = CartStore();
  console.log("cartCountState", cartCountState);
  return (
    <div>
      <h3>this is a count:{cartCountState?.cartCount?.recall}</h3>
    </div>
  );
};

export default ConmtextStoreGet;
