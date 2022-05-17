import React, { useState } from "react";
import Input from "../components/Input";

import Toolbar from "../components/Toolbar";
import Pagination from "../components/Pagination";
import search from "../api/api.js";
import Grid from "@mui/material/Grid";
import Selectors from "../components/Selectors";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Notification from "../components/Notification";
import Results, { isDataReady } from "../components/Results";

const types = ["repositories", "commits", "issues", "topics", "users"];

const Layout = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState(types[0]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(false);
  const internationalNumberFormat = new Intl.NumberFormat("en-US");
  // from toolbar - query
  const handleInput = (inputData, page) => {
    setQuery(inputData);
    apiCall(inputData, page, type);
  };

  // from paginator - page
  const handlePageChange = (event, value) => {
    setPage(value);
    apiCall(query, page, type);
  };

  // from typeSelector = type
  const handleTypeSelector = (event, value) => {
    
    setType(value);
    if (query.length > 0) apiCall(query, page, value);
  };

  const apiCall = async (inputData, page, type) => {
    setLoading(true);
    try {
      const response = await search(inputData, page, type);
      const { items, total_count } = response;
      setLoading(false);
      setData(items);
      const count = internationalNumberFormat.format(total_count);
      setCount(count);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const boxStyle = {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const errorMsg = (message = "") => {
    return <Notification message={message} error={error} setError={setError} />;
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
            <Results data={data} type={type} />
          ) : (
            <Box sx={boxStyle}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Grid>

      {isDataReady(data) ? (
        <Pagination page={page} handlePageChange={handlePageChange} />
      ) : (
        ""
      )}
      {error ? errorMsg("server issues - refresh & try again later") : ""}
    </div>
  );
};

export default Layout;
