import React, { useEffect, useState } from "react";
function Eject() {
  const [count, setccount] = useState(0);
  const [upcount, setupcount] = useState(10);

  // useEffect(() => {
  //   alert("count state" + count);
  // }, [count]);
  // useEffect(() => {
  //   alert("upcount state" + upcount);
  // }, [upcount]);
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>count ={count}</h1>
      <h2>upcount={upcount}</h2>
      <button onClick={() => setccount(count + 1)}>count</button>
      <button onClick={() => setupcount(upcount + 1)}>upcount</button>
    </div>
  );
}
export default Eject;
