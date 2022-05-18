import React, { useState } from "react";
import Input from "../components/Input";

import Toolbar from "../components/Toolbar";
import Pagination from "../components/Pagination";
import search from "../api";
import Grid from "@mui/material/Grid";
import Selectors from "../components/Selectors";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Notification from "../components/Notification";
import Results, { isDataReady } from "../components/Results";

const types = ["repositories", "commits", "issues", "topics", "users"];

const Layout = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(types[0]);
  const [page, setPage] = useState(1);

  let data, error, errorMsg, loading, count, setError;
  ({ data, error, errorMsg, loading, count, setError } = search(
    query,
    page,
    type
  ));

  // from toolbar - query
  const handleInput = (inputData) => {
    setQuery(inputData);
  };

  // from paginator - page
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // from typeSelector = type
  const handleTypeSelector = (event, value) => {
    setType(value);
  };

  const boxStyle = {
    paddingTop: "40vh",
    paddingLeft: "25vw",
  };

  return (
    <div>
      <Toolbar count={count}>
        <Input handleInput={handleInput} />
      </Toolbar>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Selectors
            handleTypeSelector={handleTypeSelector}
            type={type}
            types={types}
          />
        </Grid>
        <Grid item md={9}>
          {!loading ? (
            <Results data={data} type={type} setError={setError} />
          ) : (
            <Box sx={boxStyle}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Grid>
      )
      {isDataReady(data) ? (
        <Pagination page={page} handlePageChange={handlePageChange} />
      ) : (
        ""
      )}
      {error ? (
        <Notification message={errorMsg} error={error} setError={setError} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Layout;
