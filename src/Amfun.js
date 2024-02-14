// import Student from "./Student";

function Amfun() {
  const newarray = ["anil", "sam", "peter", "deep"];

  let arrat2 = [
    { name: "jenis", email: "jenis@gamil.com", contact: 123 },
    { name: "deep", email: "deep@gamil.com", contact: 111 },
    { name: "ani", email: "ani@gamil.com", contact: 555 },
    { name: "sahil", email: "sahil@gamil.com", contact: 666 },
  ];
  // map with loop
  //   newarray.map((item) => {
  //     console.log("my name is ", item);
  //   });

  //   for (var i = 0; i < newarray.length; i++) {
  //     console.log("for loop name", newarray[i]);
  //   }
  return (
    <div>
      <h1>handle array with list</h1>
      {newarray.map((data) => (
        <h1>name is :{data}</h1>
      ))}
      <table border="1">
        {arrat2.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Amfun;
