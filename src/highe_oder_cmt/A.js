import React, { useState } from "react";
import Hoc from "./Hoc";

const A = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <button onClick={increment}>A {count} Click</button>
    </div>
  );
};

export default Hoc(A);
