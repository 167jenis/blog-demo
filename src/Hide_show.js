import { useState } from "react";
function Hide_show() {
  const [status, setstatus] = useState(true);
  return (
    <div>
      {status ? <h1>hello wold </h1> : null}
      <button onClick={() => setstatus(false)}>hide</button>
      <button onClick={() => setstatus(true)}>show</button>
      <button onClick={() => setstatus(!status)}>toggle</button>
    </div>
  );
}
export default Hide_show;
