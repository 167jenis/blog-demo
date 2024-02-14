// import { useState } from "react";
import { useEffect, useState } from "react";
import User from "./User";
import Student from "./Student";
import Hide_show from "./Hide_show";
import MultiRangeSlider from "multi-range-slider-react";
import Profile from "./Profile";
import Dog from "./Dog";
import Eject from "./Eject";
import { Button } from "react-bootstrap";
import Amfun from "./Amfun";
import Cpdata from "./Cpdata";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Dyrou from "./component/Dyrou";
import Array from "./Array&object";
import Search from "./Search";
import Pagination from "./Pagination";
import "./App.css";
import Color from "./Color";
// import Slider from "./Slider";
import DataSave from "./DataSave";
import AppiGet from "./AppiGet";
import Card from "./Card";
import DateColor from "./DateColor";
import Slider from "rc-slider/";
import "rc-slider/assets/index.css";
import TicTacToe from "./TicTacToe";
// import HocComponent from "./HocComponent";
import A from "./highe_oder_cmt/A";
import B from "./highe_oder_cmt/B";
import SearchData from "./highe_oder_cmt/UserList";
import SearchTodo from "./highe_oder_cmt/TodoList";
import MyHook from "./Hook/MyHook";
import LeetCode from "./leetCode_cmt/LeetCode";
import ComA from "./Hook/context/ComA";
import { createContext } from "react";
import PayPal from "./component/PayPal";
// import LineChats from "./component/LineChats";
import VideoTrim from "./component/videoTrimming";
import SameNumber from "./component/sameNumber/SameNumber";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./component/CheckoutForm.js/CheckoutForm";
import MainSelect from "./component/PaginationSelect/MainSelect";
import { CartProvider } from "./contexts/cart";
import ConmtextStoreGet from "./component/ConmtextStoreGet";
import ConmtextStoreUpdate from "./component/ConmtextStoreUpdate";
const stripePromise = loadStripe(
  "pk_test_51MywGsSHQm1xM13KSistv3DuhSvR836AzDfCXBex1ZkYfjyUUvFH4otNM8OxfLb5IwZMDXkrBnLASBv7CdZYRQr800SHgX3Haw"
);
const Fname = createContext();
const Lname = createContext();

function App() {
  // stripePromise.then((res) => {
  //   console.log("ressss----", res.retrievePaymentIntent());
  // });
  const [dateSave, setDateSave] = useState([]);
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51MywGsSHQm1xM13K8YQUc9YRnNhkBGWiMCtP6Kjwi4BfHAVJyfGdmjFSr9ANye71bQAwT693IMdlJOwpPjAT6QDo003iOwnhHk",
  };
  let [cheng, setcheng] = useState("anil");
  let myArray = [1, 2, 3, 4, 5];
  const [number, setNumber] = useState();
  const [checkout, setCheckout] = useState(false);
  let total = 0;
  total = myArray.reduce((total, num, i) => {
    console.log("num--->", num);
    return total + num;
  });
  console.log("total----->", total);
  // const [array, setArray] = useState([1, 2, 3, 4]);
  // let abc = [...array];
  // abc[1] = 6;
  // useEffect(() => {
  //   setArray(abc);
  // }, [array]);
  // setArray(abc);
  // console.log("array---->", array);
  var my_Array = [
    {
      name: "jenis",
      id: 1,
      status: true,
    },
    {
      name: "deep",
      id: 1,
      status: true,
    },
    {
      name: "yagnik",
      id: 1,
      status: true,
    },
    {
      name: "jenil",
      id: 1,
      status: true,
    },
    {
      name: "pavan",
      id: 1,
      status: true,
    },
    {
      name: "sahil",
      id: 1,
      status: true,
    },
  ];

  var my_check_array = [
    {
      name: "jenis",
      id: 1,
    },
    {
      name: "sahil",
      id: 2,
    },
  ];

  console.log("my_Arrayyyyy", my_Array);

  my_Array.forEach((element) => {
    let abc = my_check_array.filter((elements) => {
      return elements.name === element.name;
    });
    if (abc.length == 0) {
      console.log("aaaa", element.name);
      element.status = true;
    } else {
      element.status = false;
    }
    console.log("sssss", abc);
  });
  console.log("my_Array", my_Array);

  var name = "jenis alagiya";

  function click() {
    name = "deep jasani";
    alert(name);
  }
  function getdata() {
    alert("dog component");
  }
  let hk = "jenis alagiya234";
  function parentalert(ml) {
    alert(ml);
  }
  const date = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    // alert(date + "-" + month + "-" + year);
    let clickedDate = date + month + year;
    // clickedDate.push(date + month + year);
    setDateSave([...dateSave, clickedDate]);
    console.log("date------>", clickedDate);
    // let abc = dateSave;
    localStorage.setItem(
      "dateSave",
      JSON.stringify([...dateSave, clickedDate])
    );
  };
  console.log("date dave", dateSave);
  let day = 1;
  let category = "jendis";
  let array = [
    {
      day: 1,
      name: "jenis",
    },
    {
      day: 1,
      name: "kushal",
    },
  ];
  let filter = array.filter(
    (item) => day == item?.day && category == item?.name
  );
  console.log("filter", filter);

  // =============game========
  const [typeCheck, setTypeCheck] = useState("O");
  const [arrayGame, setArrayGame] = useState([
    {
      one: ["", "", ""],
      tow: ["", "", ""],
      there: ["", "", ""],
    },
  ]);
  const [arrayGame2, setArrayGame2] = useState([
    {
      one: ["", "", ""],
      tow: ["", "", ""],
      there: ["", "", ""],
    },
  ]);
  // else if()
  const checkFun = (pot, index) => {
    console.log("pottt-->", pot, "index", index, "typeCheck", typeCheck);

    if (typeCheck == "O") {
      let abc = [...arrayGame];
      abc.map((item) => {
        item[pot][index] = typeCheck;
      });
      console.log("abc-->", abc);
      let abc2 = [...arrayGame2];
      // abc.map((item) => {

      let filter = abc[0].one.filter((element) => element == "O");
      console.log("filterrrrrr", filter.length);
      if (filter.length >= 3) {
        // alert("1");
        abc2[0].one[0] = filter?.[0];
        abc2[0].tow[0] = filter?.[1];
        abc2[0].there[0] = filter?.[2];
      } else if (
        abc[0].tow == ["O", "O", "O"] ||
        abc[0].tow == ["X", "X", "X"]
      ) {
        // alert("2");
        // abc2.one[1] = abc[0].tow[0];
        // abc2.tow[1] = abc[0].tow[1];
        // abc2.there[1] = abc[0].tow[2];
      } else if (
        abc[0].there == ["O", "O", "O"] ||
        abc[0].there == ["X", "X", "X"]
      ) {
        alert("3");

        // abc2.one[2] = abc[0].there[0];
        // abc2.tow[2] = abc[0].there[1];
        // abc2.there[2] = abc[0].there[2];
      }
      // });
      console.log("xxxxxsssss", abc2);
      setArrayGame(abc);
      setArrayGame2(abc2);
      setTypeCheck("X");
    } else {
      let abc = [...arrayGame];
      abc.map((item) => {
        item[pot][index] = typeCheck;
      });
      console.log("abc-->", abc);
      let abc2 = [...arrayGame2];
      // abc.map((item) => {
      console.log("abc[0]one", abc[0].one, "===", ["O", "O", "O"]);
      console.log("abc[0]one", abc[0].one === ["O", "O", "O"]);
      if (abc[0].one == ["O", "O", "O"]) {
        alert("1");
        // abc2.one[0] = abc[0].one[0];
        // abc2.tow[0] = abc[0].one[1];
        // abc2.there[0] = abc[0].one[2];
      } else if (
        abc[0].tow == ["O", "O", "O"] ||
        abc[0].tow == ["X", "X", "X"]
      ) {
        alert("2");

        // abc2.one[1] = abc[0].tow[0];
        // abc2.tow[1] = abc[0].tow[1];
        // abc2.there[1] = abc[0].tow[2];
      } else if (
        abc[0].there == ["O", "O", "O"] ||
        abc[0].there == ["X", "X", "X"]
      ) {
        alert("3");

        // abc2.one[2] = abc[0].there[0];
        // abc2.tow[2] = abc[0].there[1];
        // abc2.there[2] = abc[0].there[2];
      }
      // });

      setArrayGame(abc);
      setArrayGame2(abc2);

      setTypeCheck("O");
    }
  };
  console.log("arrrrrrrrrrrrrr", arrayGame2);
  console.log("typeCheck-->", typeCheck);
  console.log("game--->", arrayGame);

  useEffect(() => {
    arrayGame[0]?.one.map((item, index) => {
      console.log("indexxx->", index);
      if (
        arrayGame[0].one[index] == "O" &&
        arrayGame[0].tow[index] == "O" &&
        arrayGame[0].there[index] == "O"
      ) {
        console.log(
          "yesssssssssssssssssssss",
          arrayGame[0].one[0],
          arrayGame[0].tow[0],
          arrayGame[0].there[0]
        );
        alert("yes");

        setArrayGame([
          {
            one: ["", "", ""],
            tow: ["", "", ""],
            there: ["", "", ""],
          },
        ]);
      } else if (
        arrayGame[0].one[index] == "X" &&
        arrayGame[0].tow[index] == "X" &&
        arrayGame[0].there[index] == "X"
      ) {
        alert("no");
        setArrayGame([
          {
            one: ["", "", ""],
            tow: ["", "", ""],
            there: ["", "", ""],
          },
        ]);
      } else if (
        arrayGame2[0].one[index] == "O" &&
        arrayGame2[0].tow[index] == "O" &&
        arrayGame2[0].there[index] == "O"
      ) {
        setArrayGame([
          {
            one: ["", "", ""],
            tow: ["", "", ""],
            there: ["", "", ""],
          },
        ]);
        setArrayGame2([
          {
            one: ["", "", ""],
            tow: ["", "", ""],
            there: ["", "", ""],
          },
        ]);
      } else if (
        arrayGame2[0].one[index] == "X" &&
        arrayGame2[0].tow[index] == "X" &&
        arrayGame2[0].there[index] == "X"
      ) {
        setArrayGame([
          {
            one: ["", "", ""],
            tow: ["", "", ""],
            there: ["", "", ""],
          },
        ]);
      }
    });
  }, [arrayGame]);

  /// variationdata
  const [variationData, setVariationData] = useState([]);
  const [addVariation, setAddVariation] = useState("");
  const [editV, setEditV] = useState({ edit: false, id: "" });
  const addVariationFun = () => {
    if (!addVariation) {
      alert("enter a value");
    } else if (addVariation && editV.edit) {
      // setVariationData(
      //   variationData.forEach((element, index) => {
      //     console.log("item----->", element);

      //     if (index == editV.id) {
      //       element.value = addVariation;
      //     }
      //     return element;
      //   })
      // );
      setVariationData(
        variationData.map((element, index) => {
          console.log("item----->", element, index);

          if (index == editV.id) {
            element.value = addVariation;
          }
          console.log("item----->", element, index);

          return element;
        })
      );
      setAddVariation("");
      setEditV({ edit: false, id: "" });
      // console.log("abcabca bc", abc);
      // setVariationData(va)
    } else {
      let abc = variationData;
      let obj = {
        value: addVariation,
      };
      abc.push(obj);
      setVariationData(abc);
      setAddVariation("");
    }
  };
  const editVariation = (index) => {
    let abc = variationData.find((element, indexx) => {
      return indexx == index;
    });
    console.log(abc);
    setAddVariation(abc?.value);
    setEditV({ edit: true, id: index });
  };
  // const saveVariationFun = () => {
  //   let abc = variationData;
  //   abc[editV.id].value = addVariation;
  //   setVariationData(abc);
  //   setEditV({ id: "", edit: false });
  //   setAddVariation("");
  // };

  console.log("variation--data", variationData);
  function log(value) {
    console.log("valuess---->", value);
  }

  return (
    <div className="App">
      <CartProvider>
        {/* <LineChats /> */}
        {/* <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements> */}
        <input
          type={"number"}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <a
          href={`https://wa.me/send?phone=91${number}&attachment=https://images.unsplash.com/photo-1633856364580-97698963b68b?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500`}
          target={"_blank"}
        >
          {number}
        </a>
        <h1>{name}</h1>
        <button onClick={click}>click me</button>
        <h2>Video Trimming</h2>
        {/* <VideoTrim /> */}
        {/* <MultiRangeSlider
        min={0}
        max={100}
        step={5}
        minValue={50}
        maxValue={30}
        // onInput={(e) => {
        // 	handleInput(e);
        // }}
      /> */}
        <div>
          {/* <Slider
          pageWrapId={"Slider-wrap"}
          outerContainerId={"outer-container"}
        /> */}
        </div>
        {/* <User /> */}
        {/* <Student
        name={cheng}
        email={"jenis@gmail.com"}
        others={{ add: "india", mobile: "000" }}
      /> */}
        {/* <Student
        name={cheng}
        email={"deep@gmail.com"}
        others={{ add: "usa", mobile: "111" }}
      /> */}
        <button
          onClick={() => {
            setcheng("sidhu");
          }}
        >
          click me
        </button>
        <Hide_show />
        <Profile />
        <Dog hp={getdata} />
        <div>
          <Eject />
        </div>
        <Button className="m-5">click</Button>
        <Amfun />
        <Cpdata name={hk} alert={parentalert} />
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dyrou/:name" element={<Dyrou />} />
            </Routes>
          </BrowserRouter>
        </div>
        <br />
        <br />
        <Array />
        <Search />
        <Color />
        <DataSave />
        <br />
        <br />
        {/* <AppiGet /> */}
        <br />
        <br />
        <br />
        <br />
        {/* <h1 className="text-center">pagination data</h1> */}
        {/* <Pagination /> */}
        <div>
          {/* {array.map((item) => (
          <span>{item}</span>
        ))} */}
        </div>
        <Slider
          range
          allowCross={false}
          min={0}
          max={20000}
          defaultValue={[50, 2000]}
          onChange={log}
        />{" "}
        {/* <Range /> */}
        <br />
        <Card />
        <br />
        <br />
        {/* <Date /> */}
        <DateColor />
        <LeetCode />
        <br />
        <br />
        <button onClick={() => date()}>click</button>
        <br />
        <br />
        {filter.length > 0 ? (
          filter?.map((item) => <h1>{item.name}</h1>)
        ) : (
          <h1>not matched</h1>
        )}
        <br />
        <br />
        {/* <div className="gameMain">
        {arrayGame[0]?.one?.map((item, index) => (
          <button
            key={index}
            className="button"
            disabled={item == "O" ? true : item == "X" ? true : false}
            onClick={() => checkFun("one", index)}
          >
            {item}
            {console.log("item-->", item)}
          </button>
        ))}
        {arrayGame[0]?.tow?.map((item, index) => (
          <button
            key={index}
            className="button"
            disabled={item == "O" ? true : item == "X" ? true : false}
            onClick={() => checkFun("tow", index)}
          >
            {item}
          </button>
        ))}
        {arrayGame[0]?.there?.map((item, index) => (
          <button
            key={index}
            className="button"
            disabled={item == "O" ? true : item == "X" ? true : false}
            onClick={() => checkFun("there", index)}
          >
            {item}
          </button>
        ))}
      </div> */}
        <TicTacToe />
        <br />
        <br />
        <br />
        {/* <HocComponent /> */}
        <h1>Highe Oder Component 1</h1>
        <A />
        <B />
        <br />
        <br />
        <br />
        <h1>Highe Oder Component 2</h1>
        <div style={{ display: "flex" }}>
          <SearchData />
          <SearchTodo />
        </div>
        <h1 style={{ textAlign: "center", alignContent: "center" }}>HOOK</h1>
        <MyHook />
        <div>
          <input
            type={"text"}
            value={addVariation}
            onChange={(e) => setAddVariation(e.target.value)}
          />
          {!editV.edit ? (
            <button onClick={addVariationFun}>add</button>
          ) : (
            <button onClick={addVariationFun}>save</button>
          )}
        </div>
        <div>
          {variationData?.map((item, index) => (
            <div key={index}>
              {console.log("-----", item.edit)}
              <span
                style={{
                  border: "1px solid red",
                  width: "300px",
                  display: "inline-block",
                }}
              >
                {item.value}
              </span>
              {/* <input type="text" value={item?.value} disabled={item?.edit} /> */}
              <button onClick={() => editVariation(index)}>edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
        <div className="p-4">
          <MainSelect />
        </div>
        <h2>context api</h2>
        <Fname.Provider value={"jenis"}>
          <Lname.Provider value={"alagiya"}>
            <ComA />
          </Lname.Provider>
        </Fname.Provider>
        <hr />
        <hr />
        <hr />
        <h1 className="text-center">PayPal Pyment Methos</h1>
        <div className="text-center">
          {checkout ? (
            <>{/* <PayPal /> */}</>
          ) : (
            <button
              onClick={() => {
                setCheckout(true);
              }}
            >
              Checkout
            </button>
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1>same number</h1>
        <SameNumber />
        {/* paginatinon select */}
        <h1>contexts</h1>
        <ConmtextStoreGet />
        <ConmtextStoreUpdate />
      </CartProvider>
    </div>
  );
}

export default App;
export { Fname, Lname };
