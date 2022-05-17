import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// eslint-disable-next-line react/prop-types
export default function ButtonAppBar({ children }) {
  return (
    <Box sx={{ position: "sticky", top: "0", zIndex: "2" }}>
      <AppBar style={{ position: "sticky" }}>
        <Toolbar
          style={{ position: "stick", display: "flex", textAlign: "center" }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {children}
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Github Search Engine
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
