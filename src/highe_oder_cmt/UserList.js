import React from "react";
import HocTodo from "./HocTodo";

const UserList = ({ data }) => {
  // const [users, setusers] = useState([]);
  // const [term, setTerm] = useState("");
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     console.log(res);
  //     const json = await res.json();
  //     console.log("json--->", json);
  //     setusers(json);
  //   };
  //   fetchUser();
  // }, []);
  let renderUsers = data?.map((item, index) => {
    return (
      <div key={index}>
        <p>
          <strong>{item?.name}</strong>
        </p>
      </div>
    );
  });
  // let filterUser = users
  //   ?.filter(({ name }) => {
  //     return name?.indexOf(term) >= 0;
  //   })
  //   ?.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         <p>
  //           <strong>{item?.name}</strong>
  //         </p>
  //       </div>
  //     );
  //   });
  // console.log("aaaaaa==>", term);
  return (
    <div>
      {/* <input value={term} onChange={(e) => setTerm(e.target.value)} />
      {filterUser} */}
      {renderUsers}
    </div>
  );
};
const SearchData = HocTodo(UserList, "users");
export default SearchData;
