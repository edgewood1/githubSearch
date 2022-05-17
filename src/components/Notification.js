import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";

// eslint-disable-next-line react/prop-types
const Notification = ({ error, setError, message }) => {
  return (
    <Stack sx={{ width: "100%", marginBottom: "100px" }} spacing={2}>
      <Collapse in={error}>
        <Alert
          onClose={() => {
            setError(false);
          }}
          severity="error"
        >
          {" "}
          {`Error: ${message}`}
        </Alert>{" "}
      </Collapse>
    </Stack>
  );
};

export default Notification;
