import React, { useEffect, useState } from "react";

const SameNumber = () => {
  const [cardNumber, setCardNumber] = useState([]);
  const handleClick = (index) => {};
  const RendowNumberGenerate = () => {
    // setCardNumber(
    let randomNumber = Array.from(Array(6).keys()).map((item) => {
      return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    });
    let dublicateArray = [];
    for (var j = 0; j < randomNumber.length; j++) {
      dublicateArray.push(
        Math.floor(
          Math.random() * (randomNumber[j] - randomNumber[j] + 1) +
            randomNumber[j]
        )
      );
    }
    setCardNumber(
      randomNumber.concat(dublicateArray).map((item) => {
        return {
          number: item,
          show: false,
        };
      })
    );
  };
  useEffect(() => {
    RendowNumberGenerate();
  }, []);

  return (
    <div>
      {cardNumber?.map((item, index) => {
        <div onClick={handleClick(index)}> {item?.show && item?.number}</div>;
      })}
    </div>
  );
};

export default SameNumber;
