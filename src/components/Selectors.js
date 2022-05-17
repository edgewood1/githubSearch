/* eslint-disable react/prop-types */
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

/**
 * Card - this returns either a mainCard or both a mainCard && reviewCard
 */
const Selectors = ({ types, handleTypeSelector, type }) => {
  const paperStyle = (item) => ({
    margin: "10px",
    height: "50px",
    width: "250px",
    background: type === item ? "gray" : "white",
  });
  const wrapperStyle = {
    position: "sticky",
    top: "90px",
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
    marginLeft: "40px",
  };

  return (
    <div style={wrapperStyle}>
      {types.map((item) => (
        <Paper
          key={item}
          onClick={(e) => handleTypeSelector(e, item)}
          style={paperStyle(item)}
          elevation={2}
        >
          <Box padding={2}>
            <div>
              <Typography>{item}</Typography>
            </div>
          </Box>
        </Paper>
      ))}
    </div>
  );
};

export default Selectors;
