// PaginationBar.jsx
import React from "react";
import PaginationBar from "../../types/PaginationBar";

const PaginationBarComponent = (props: PaginationBar) => {
  return (
    <div className="pagination-bar">
      {Array.from({ length: props.totalPages }, (_, i) => (
        <React.Fragment key={i}>
          <div
            className={`circle ${i < props.currentPage ? "active" : ""}`}
            key={`circle-${i}`}
          >
            {i + 1}
          </div>
          {i < props.totalPages - 1 && (
            <div
              className={`line ${i < props.currentPage - 1 ? "active" : ""} ${
                i === props.currentPage - 1 ? "half-active" : ""
              }`}
              key={`line-${i}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PaginationBarComponent;
