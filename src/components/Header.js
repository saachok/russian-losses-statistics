import { AppBar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      sx={{ height: "50px", alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant="h5">
        Russian losses at war against Ukraine
      </Typography>
    </AppBar>
  );
};

export default Header;
