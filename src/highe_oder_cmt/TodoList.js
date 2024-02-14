import { useSSRSafeId } from "@react-aria/ssr";
import React, { useState, useEffect } from "react";
import HocTodo from "./HocTodo";

const TodoList = ({ data }) => {
  console.log(":data==>", data);
  // const [users, setusers] = useState([]);
  // const [term, setTerm] = useState("");
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     console.log(res);
  //     const json = await res.json();
  //     console.log("json--->", json);
  //     setusers(json);
  //   };
  //   fetchUser();
  // }, []);
  let renderUsers = data?.slice(0, 10).map((item) => {
    return (
      <div key={item?.id}>
        <p>
          <strong>{item?.title}</strong>
        </p>
      </div>
    );
  });
  // let filterUser = users
  //   ?.filter(({ title }) => {
  //     return title?.indexOf(term) >= 0;
  //   })
  //   .slice(0, 10)
  //   ?.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         <p>
  //           <strong>{item?.title}</strong>
  //         </p>
  //       </div>
  //     );
  //   });
  // console.log("aaaaaa==>", term);
  return <div>{renderUsers}</div>;
};
const SearchTodo = HocTodo(TodoList, "todos");
export default SearchTodo;
