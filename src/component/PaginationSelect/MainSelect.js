import React, { useEffect, useState } from "react";
import SelectWrapper from "./SelectWrapper";

const baseurl = "https://rickandmortyapi.com/api";

function MainSelect() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [pageNo, setPageNo] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const loadOptions = async (page) => {
    setIsNextPageLoading(true);
    try {
      const size = 50;
      const data = await fetch(`${baseurl}/character/?page=${page}`);
      const pList = await data.json();
      console.log("data---select", pList);
      const pdtList = [];
      for (let i = 0; i < pList?.results.length; i++) {
        pdtList.push({
          label: pList?.results[i]?.name || "",
          value: pList?.results[i].id,
        });
      }

      setOptions(pdtList);
      setIsNextPageLoading(false);
      setHasNextPage(pdtList.length < 500);
      setPageNo(page);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(options);

  const loadNextPage = async () => {
    await loadOptions(pageNo + 1);
  };
  useEffect(() => {
    loadOptions(1);
  }, []);
  console.log("options", options);
  return (
    <div className="dropdown">
      <div className="dropdown">
        <div className="label">
          <label>Pdt</label>
        </div>
        <SelectWrapper
          value={selectedOption}
          placeholder="Select"
          isClearable
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          options={options}
          loadNextPage={loadNextPage}
          onChange={(selected) => setSelectedOption(selected)}
        />
      </div>
    </div>
  );
}

export default MainSelect;
