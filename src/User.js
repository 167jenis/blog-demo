import { useState } from "react";

// state
function User() {
  var [sets, setsets] = useState("hello");
  function set() {
    setsets("how are you");
    alert(sets);
  }
  return (
    <div>
      <p>{sets}</p>
    </div>
  );
}
export default User;
