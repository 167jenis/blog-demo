import React, { useState, useEffect, useCallback } from "react";

function DataSave() {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  // to get the data from
  const getlocalItems = () => {
    let list = localStorage.getItem("list");
    console.log(list);
    if (list) {
      let abc = JSON.parse(list);
      setItem(abc);
    } else {
      setItem([]);
    }
  };

  const additem = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
      localStorage.setItem("list", JSON.stringify([...item, inputData]));
    }
  };
  const deleteItem = (id) => {
    console.log("id--------->", id);
    const updatedItems = item.filter((elem, ind) => {
      console.log("ind------->", ind);
      console.log("ind!==id------>", ind !== id);
      return ind !== id;
    });
    console.log("updated---->".updatedItems);
    localStorage.setItem("list", JSON.stringify(updatedItems));
    setItem(updatedItems);
  };

  useEffect(() => {
    getlocalItems();
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter a type"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={additem}>Add</button>
        {item?.map((elem, ind) => (
          <div key={ind}>
            <h2>{elem}</h2>
            <button onClick={() => deleteItem(ind)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
export default DataSave;
