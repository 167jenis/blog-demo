import React, { useState } from "react";

const Card = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [array, setArray] = useState([
    {
      quantity: "",
      pricePerShare: 4300,
      price: "",
    },
  ]);

  const addToCard = () => {
    let abc = [...array];
    let obj = {
      quantity: "",
      pricePerShare: 4300,
      price: "",
    };
    setArray([...array, obj]);
    console.log("abc--->", abc);
    // setArray(abc);
  };

  console.log("ARRAY-->", array);

  const quantityCount = (e, index) => {
    let abc = [...array];
    abc[index].quantity = e.target.value;
    abc[index].price = abc[index]?.quantity * abc[index]?.pricePerShare;
    // console.log("aray-multiple-->", multiple);
    console.log("cccccc", abc);
    let total = 0;
    abc.forEach((element) => {
      total = total + element.price;
    });
    setArray(abc);
    setSubTotal(total);
    console.log("total", total);
  };

  return (
    <>
      <div className="continer-my p-5">
        {/* <div className="row justify-content-center d-flex"> */}
        {/* <div className="col-lg-6"> */}
        <div className="my-main">
          <div className="card my-xyz">
            <div className="my-demo  my-card  p-4 ">
              <h2 className="text-center">Basic</h2>
              <span>DataBase</span>
              <br />
              <span>Email</span>
              <br />
              <span>Free Support</span>
              <br />

              <span>Maintaince</span>
              <br />
              <span>4300</span>
              <br />
              <button className="my-button" onClick={addToCard}>
                Add To Card
              </button>
            </div>
          </div>
        </div>
      </div>
      {array?.map((item, index) => (
        <div key={index}>
          <label>Quantity :-</label>
          <input
            value={item?.quantity}
            type="number"
            onChange={(e) => {
              quantityCount(e, index);

              console.log(e.target.value);
            }}
            id="quantity"
            name="quantity"
            min="1"
            max="10"
          />
          <div>Price Per Share:-{item?.pricePerShare} </div>
          <div>price :- {item?.price}</div>
        </div>
      ))}
      <div>sub subTotal :- {subTotal}</div>
    </>
  );
};

export default Card;
