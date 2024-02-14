import React, { useState } from "react";
import Hoc from "./Hoc";

const B = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <button
        onMouseOver={(e) => {
          increment(e);
          console.log("eeeeeeee--==>", e.target.value);
        }}
        // value="sjjjsj"
      >
        B {count} Click
      </button>
    </div>
  );
};

export default Hoc(B);
