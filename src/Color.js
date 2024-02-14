import React, { useState } from "react";
function Color() {
  const [cls, setCls] = useState("green");
  return (
    <>
      <style>{`
        .red {color: red}
        .green {color: green}
        
        `}</style>
      <button
        className={cls}
        onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}
      >
        Button
      </button>
    </>
  );
}
export default Color;
