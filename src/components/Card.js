import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import repo from "../api/responseHandler";

/**
 * Card - this returns either a mainCard or both a mainCard && reviewCard
 */
// eslint-disable-next-line react/prop-types
const Card = ({ obj, type, errorMsg, error, setError }) => {
  const items = repo(obj, type);
  console.log("-----", items);
  if (items instanceof Error) {
    console.log("dang--------");
    setError(true);
  } else {
    if (error) setError(false);
  }

  const face = () =>
    items ? (
      <div>
        <Typography style={{ fontWeight: "bold" }}>{items.a}</Typography>
        <Typography>{items.b}</Typography>
        <div style={{ display: "flex" }}>
          <Typography style={{ marginRight: "30px" }}>{items.c}</Typography>
          <Typography style={{ marginRight: "30px" }}>{items.d}</Typography>

          <Typography>{items.e}</Typography>
        </div>
      </div>
    ) : (
      setError(true)
    );

  return (
    <Paper style={{ marginTop: "10px" }} elevation={2}>
      <Box padding={2}>{face()}</Box>
    </Paper>
  );
};

export default Card;
