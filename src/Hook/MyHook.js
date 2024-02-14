import React, { useReducer, useRef } from "react";

const MyHook = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  
  const inputRef = useRef(null);
  const onclickRef = () => {
    // alert("msg");
    console.log("reffffffff---->", inputRef.current.value);
    inputRef.current.focus();
    // inputRef.current.value = "";
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h3>{state.count}</h3>
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT" });
              dispatch({ type: "toggleShowText" });
            }}
          >
            click
          </button>
          {/* {console.log("show text --->",)} */}
          {state.showText ? <p>This is a Text</p> : ""}
        </div>
      </div>
      <h1>UserRef</h1>
      <div>
        <input type={"text"} placeholder="Ex.." ref={inputRef} />
        <button onClick={() => onclickRef()}>Change Name</button>
      </div>
    </>
  );
};

export default MyHook;
