import React from "react";
import { useContext } from "react";
import { Fname, Lname } from "../../App";
const ComC = () => {
  const lname = useContext(Lname);
  console.log("l name", lname);
  return (
    <div>
      <Fname.Consumer>
        {(fname) => {
          return (
            <Lname.Consumer>
              {(lname) => {
                return <h3>this is a ComC name {fname + " " + lname}</h3>;
              }}
            </Lname.Consumer>
          );
        }}
      </Fname.Consumer>
    </div>
  );
};

export default ComC;
