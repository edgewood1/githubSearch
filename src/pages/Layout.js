import React, { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import Toolbar from "../components/Toolbar";
import Pagination from "../components/Pagination";
import search from "../api/api.js";
import Grid from "@mui/material/Grid";
import Selectors from "../components/Selectors";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Notification from '../components/Notification'

const types = ["repositories", "commits", "issues", "topics", "users"];

const Layout = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState(types[0]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    console.log("value", value);
    setType(value);
    if (query.length > 0) apiCall(query, page, value);
  };

  const apiCall = async (inputData, page, type) => {
    setLoading(true);
    try {
      const response = await search(inputData, page, type);
      const { items } = response;
      setLoading(false);
      setData(items);
      
    } catch (err) {
      setLoading(false);
  
      console.log("error", err);
      setData(err);
      setError(true);
    }
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "60px",
  };

  const boxStyle = {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const errorMsg = (message = '') => {
    return (
      <Notification message={message} error={error} setError={setError} />
    );
  };

  const dataCheck = (data) => data !== null || data !==undefined;

  return (
    <div>
      <Toolbar>
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

        {!loading ? (
          <Grid item md={9}>
            {dataCheck(data) ? (
              <div style={cardStyle}>
                {data.map((obj, i) => (
                  <Card key={obj.node_id ?? i} setError={setError}errorMsg={errorMsg} error={error} obj={obj} type={type} />
                ))}
              </div>
            ) : (
              ""
            )}
          </Grid>
        ) : (
          <Box sx={boxStyle}>
            <CircularProgress />
          </Box>
        )}
      </Grid>

      {dataCheck(data) ? (
        <Pagination page={page} handlePageChange={handlePageChange} />
      ) : (
        ""
      )}
      {error ? errorMsg('server issues - try again later') : ""}
    </div>
  );
};

export default Layout;
