// import React from "react";
function Dog(props) {
  return (
    <div>
      <h1>pass_props component</h1>
      <button onClick={() => props.hp()}>click</button>
    </div>
  );
}
export default Dog;
