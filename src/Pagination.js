import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pagecount, setPagecount] = useState(0);

  let limit = 10;
  const fechData = async (currentPage) => {
    try {
      const respones = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&limit=${limit}`
      );
      // console.log(
      //   "respones--->",
      //   respones.json().then((i) => i)
      // );
      respones.json().then((res) => {
        console.log(res);
        setData(res);
      });
      setPagecount(Math.ceil(100 / limit));
    } catch (error) {
      console.log("error--->", error);
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    fechData(data.selected + 1);
  };
  useEffect(() => {
    fechData(currentPage);
  }, []);
  return (
    <>
      <div>Pagination</div>
      <div className="container">
        <div className="row">
          {data?.map((item, i) => (
            <div className="col-sm-6 col-md-6 v my-2">
              <div className="card shadpow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">{item?.title}</h5>
                  <h6 className="card-text">{item?.body}</h6>
                  {/* <p></p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel={"..."}
          pageCount={pagecount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default Pagination;
