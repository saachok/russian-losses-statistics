import { AppBar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      sx={{
        height: "50px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      position="sticky"
    >
      <Typography variant="h5">
        Russian losses at war against Ukraine
      </Typography>
    </AppBar>
  );
};

export default Header;
