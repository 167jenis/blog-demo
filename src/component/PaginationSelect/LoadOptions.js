/** OLD CODE: NOT WORKING */
import { useState } from "react";

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const baseurl = "http://localhost:5000/api";

const LoadOptions = async (search) => {
  const [prevLast, setPrevLast] = useState(0);
  const [pdtOpt, setPdtOpt] = useState([]);

  await sleep(1000);

  const response = await fetch(`${baseurl}/pdt`);
  const pList = await response.json();
  const pdtList = [];
  for (let i = 0; i < pList.length; i++) {
    pdtList.push({ label: pList[i].pdtno, value: pList[i].pdtno });
  }
  setPdtOpt(pdtList);
  setPrevLast(pList.length);

  return {
    options: pdtList,
    hasMore: true,
  };
};

export default LoadOptions;
