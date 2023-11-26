import React from "react";
import { Button } from "@mui/material";

const Pagination = ({
  currentPage,
  handlePrevClick,
  handleNextClick,
  totalPages,
}) => {
  const paginationContainerStyle = {
    top: "150px",
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 1000,
  };

  return (
    <div style={paginationContainerStyle}>
      <Button
        variant="contained"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        onClick={handleNextClick}
        disabled={currentPage * 9 >= totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
