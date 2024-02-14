import React, { useEffect, useState } from "react";

function AppiGet() {
  const [data, setDAta] = useState([]);
  const fetchData = () => {
    let abc = fetch("https://jsonplaceholder.typicode.com/posts").then(
      (result) => {
        result.json().then((resp) => {
          console.log(resp);
          setDAta(resp);
        });
      }
    );
  };
  // https://go.superchatlive.com/api/models
  // https://go.superchatlive.com/api/models?tag=females&forceClient=1&stripcashR=0&limit=9
  // https://go.superchatlive.com/api/models?tag=men&forceClient=1&stripcashR=0&limit=9
  // https://ok.xxx/sites/brazzers/24/
  //post
  // https://syndication.realsrv.com/v1/api.php

  const fetchP = async () => {
    try {
      let abc = await fetch("https://go.superchatlive.com/api/models");
      const data = await abc.json();
      console.log("ccccccc", data);
    } catch (error) {}
  };
  //   function getItem() {}
  const deleteData = (id) => {
    alert(id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log("ddd", resp);
        // getItem();
      });
    });
  };
  console.log("sdwdw", data);

  useEffect(() => {
    fetchData();
    fetchP();
  }, []);
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Appi call and get </h1>
        <table border="1px">
          <tr>
            <th>userID</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button onClick={() => deleteData(item.id)}>deleteData</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default AppiGet;
