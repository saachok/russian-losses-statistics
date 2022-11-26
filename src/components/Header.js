import { AppBar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        // margin: 0,
        // padding: 0,
        height: "3.5rem",
        width: "100wv",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5">
        Russian losses at war against Ukraine
      </Typography>
    </AppBar>
  );
};

export default Header;
