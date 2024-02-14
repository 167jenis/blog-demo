import React, { useState } from "react";
// import React, { useState } from "./react";

function Profile() {
  const [log, setlogin] = useState(true);
  let [logg2, setlogg2] = useState(3);
  return (
    <div>
      {log ? <h1>welcome jenis</h1> : <h1>welcome gust</h1>}
      {logg2 == 1 ? (
        <h1>welcome hp</h1>
      ) : logg2 == 2 ? (
        <h1>welcome mp</h1>
      ) : (
        <h1>welcome gp</h1>
      )}
    </div>
  );
}
export default Profile;
