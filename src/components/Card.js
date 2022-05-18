import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import repo from "../api/responseHandler";

/**
 * Card - this returns either a mainCard or both a mainCard && reviewCard
 */
// eslint-disable-next-line react/prop-types
const Card = ({ obj, type, setError }) => {
  const items = repo(obj, type, setError);

  const format = (item) => {
    const regex = /http/g;
    if (item) {
      return new String(item).search(regex) === 0 ? (
        <a rel="noreferrer" target="_blank" href={item}>
          {item}
        </a>
      ) : (
        item
      );
    }
  };

  const face = () =>
    items ? (
      <div>
        <Typography style={{ fontWeight: "bold" }}>
          {format(items.a)}
        </Typography>
        <Typography>{format(items.b)}</Typography>
        <div style={{ display: "flex" }}>
          <Typography style={{ marginRight: "30px" }}>
            {format(items.c)}
          </Typography>
          <Typography style={{ marginRight: "30px" }}>
            {format(items.d)}
          </Typography>

          <Typography>{format(items.e)}</Typography>
        </div>
      </div>
    ) : (
      ""
    );

  return (
    <Paper style={{ marginTop: "10px" }} elevation={2}>
      <Box padding={2}>{face()}</Box>
    </Paper>
  );
};

export default Card;
