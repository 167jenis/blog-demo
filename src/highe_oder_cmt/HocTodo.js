import React, { useEffect, useState } from "react";

const HocTodo = (WrappedComponent, entity) => {
  console.log("eeeeee", entity);
  function DataFun() {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");
    console.log("opopop", 1);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        console.log(res);
        const json = await res.json();
        console.log("json--->", json);
        setData(json);
      } catch (error) {
        console.log("consloe.log", error);
      }
    };
    console.log("ddd", data, "term ", term);
    // fetchData();
    let filterData = data?.filter((element) => {
      if (entity == "users") {
        const { name } = element;
        return name?.indexOf(term) >= 0;
      } else if (entity == "todos") {
        const { title } = element;
        return title?.indexOf(term) >= 0;
      }
    });
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComponent data={filterData} />
      </div>
    );
  }
  return DataFun;
};

export default HocTodo;
