import React from 'react';

const Pagination = ({ state, page, setPage })=>{
  const rangeLength = 10
  let pages = [];
  const eitherSide = Math.floor(rangeLength / 2);
  const offset = page < eitherSide ? eitherSide - page : 0;
  for (let i = page - eitherSide; i <= page + eitherSide; i++) {
    pages.push(i + offset);
  }
  
  // const [numList, numListpp] = [state.length, 50]
  // const numPg = Math.floor(numList/numListpp);
  // const pages = [...Array(numPg+1).keys()].slice(1);
  // console.log(numPg)
  // console.log(pages);
  return pages.map((pn) => (
    <button
      key={pn}
      className="pagination-button"
      style={{ color: pn === page ? "red" : "grey" }}
      onClick={() => setPage(pn)}
    >
      {pn}
    </button>
  ));
}
export default Pagination;
