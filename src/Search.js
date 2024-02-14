import React, { useState } from "react";
function Search() {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div>hello Search component</div>
      <form>
        <input type="text" onChange={inputEvent} value={img}></input>
      </form>
    </>
  );
}
export default Search;
