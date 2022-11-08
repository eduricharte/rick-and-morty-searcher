import React from "react";
import "../../styles/Pagination.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="paginationNav"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextClassName="paginationButton"
      previousClassName="paginationButton"
      pageClassName="paginationList"
      activeClassName="paginationActive"
      onPageChange={({ selected }) => setPageNumber(selected + 1)}
      pageCount={info.pages ? info.pages : 1}
    />
  );
};

export default Pagination;
