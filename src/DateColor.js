import { useSSRSafeId } from "@react-aria/ssr";
import React, { useEffect, useState } from "react";

const DateColor = () => {
  const [dateCount, setDateCount] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      color: "red",
    },
    {
      id: 2,
      color: "black",
    },
    {
      id: 3,
      color: "blue",
    },
    {
      id: 4,
      color: "yellow",
    },
    {
      id: 5,
      color: "red",
    },
    {
      id: 6,
      color: "green",
    },
    {
      id: 7,
      color: "pink",
    },
  ]);
  let sub = {
    name: "jenis",
    age: 11,
    mobile: 5212,
    email: "jenis ala",
  };
  //
  //   console.log("date-->", dateddd);
  const dateClick = () => {
    const dateddd = new Date().toISOString().slice(0, 10);
    localStorage.setItem("date", dateddd);
  };
  // setDateCount(1);
  console.log("dateCount", dateCount);

  console.log("data-->", data);

  useEffect(() => {
    var d = localStorage.getItem("date");
    var ft = new Date().toISOString().slice(0, 10);
    var d2 = new Date(ft);
    console.log("ddddddddddd", d);
    var d1 = new Date(d);
    console.log("d1--->", d1, "d2----->", d2);
    var diff = d2.getTime() - d1.getTime();
    var daydiff = diff / (1000 * 60 * 60 * 24);
    console.log("daydiff", daydiff);
    setDateCount(daydiff);
  }, []);
  return (
    <div>
      <button onClick={dateClick}>click</button>
      {
        (console.log("ata----->", dateCount),
        console.log("date-count->", data[dateCount]?.color))
      }
      {data?.map((item, index) => (
        <button
          style={{
            background: index == dateCount ? data[dateCount].color : "grey",
          }}
          key={index}
        >
          {console.log("item", item.id == dateCount)}
          {item?.id}
        </button>
      ))}

      <div>
        {Object.keys(sub).map((item, i) => (
          <div>{sub[item]}</div>
        ))}
      </div>
    </div>
  );
};

export default DateColor;
