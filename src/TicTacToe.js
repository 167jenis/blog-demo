import React, { useState } from "react";

const TicTacToe = () => {
  const [toe, setToe] = useState([
    { ac: false, icon: "" },
    { ac: false, icon: "" },
    { ac: false, icon: "" },
    { ac: false, icon: "" },
    { ac: false, icon: "" },
    { ac: false, icon: "" },
    { ac: false, icon: "" },
    { ac: false, icon: "" },
    { ac: false, icon: "" },
  ]);
  const ticFunc = (i) => {
    let iconview = i % 2 == 0;
    let dumm = [...toe];
    dumm[i] = { ac: true, icon: iconview ? "x" : "o" };
    setToe(dumm);
    // let step = 3;
    // console.log(abc == 2);
    // if (step) {
    dumm.map((item, j) => {
      console.log(j);
      let duma = j + 3;
      if (dumm[i].icon == dumm[j].icon) {
        console.log("tw");
        let twin = dumm[j].icon === dumm[j + 3] && dumm[j].icon === dumm[j + 6];
        if (twin) alert("win");
      }
    });
    // }

    // dumm.map((item, index) => {
    //   for (let j = dumm.length; j < 0; j + 3) {
    //     if (item.icon == dumm[j].icon) {
    //       console.log("dum");
    //     }
    //   }
    // });
  };
  return (
    <>
      <div className="gameMain">
        {toe.map((item, i) => (
          <button
            key={i}
            className="button"
            disabled={item.icon !== ""}
            onClick={() => ticFunc(i)}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default TicTacToe;
