import { React } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// eslint-disable-next-line react/prop-types
export default function BasicPagination({ page, handlePageChange }) {
  const stackStyle = { position: "fixed", bottom: "0", right: "0", left: "0" };
  const paginationStyle = {
    ".MuiPagination-ul": {
      backgroundColor: "white",
      border: "1px solid black",
      padding: "20px",

      color: "white",
      display: "flex",
      justifyContent: "center",
    },
    ".MuiPagination-text": {
      color: "white",
    },
  };

  return (
    <Stack style={stackStyle} spacing={2}>
      <Pagination
        sx={paginationStyle}
        variant="text"
        count={10}
        color="secondary"
        page={page}
        onChange={handlePageChange}
      />
    </Stack>
  );
}
