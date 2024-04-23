import ReactPaginate from "react-paginate";
import { useStateContext } from "context/StateContext";
import cl from "./Pagination.module.scss";
import { LIMIT } from "assets/constants";

const Pagination = function ({ total }) {
  const { searchParams, setSearchParams } = useStateContext();

  const handlePageClick = (event) => {
    searchParams.set("page", event.selected + 1);
    setSearchParams(searchParams);
  };

  return (
    <div className={cl["pagination-container"]}>
      <ReactPaginate
        forcePage={searchParams.get("page") ? searchParams.get("page") - 1 : 0}
        previousLabel="<"
        nextLabel=">"
        pageClassName={cl["page-item"]}
        pageLinkClassName={cl["page-link"]}
        previousClassName={cl["previous-page-item"]}
        previousLinkClassName={cl["previous-page-link"]}
        nextClassName={cl["next-page-item"]}
        nextLinkClassName={cl["next-page-link"]}
        disabledClassName={cl["page-disabled"]}
        disabledLinkClassName={cl["page-disabled"]}
        breakLabel="..."
        breakClassName={cl["page-item"]}
        breakLinkClassName={cl["page-link"]}
        pageCount={Math.ceil(total / LIMIT)}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={cl.pagination}
        activeClassName={cl["page-active"]}
      />
    </div>
  );
};

export default Pagination;
