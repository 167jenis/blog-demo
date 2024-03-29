import React, { useState } from "react";

const Hoc = (WrappedComponent) => {
  function Counter() {
    const [count, setCount] = useState(0);
    const increment = (e) => {
      setCount(count + 1);
    };
    return (
      <div>
        <WrappedComponent count={count} increment={increment} />
      </div>
    );
  }
  return Counter;
};

export default Hoc;
