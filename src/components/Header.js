import { AppBar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        width: "100wv",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h5"} sx={{ p: 1.5 }}>
        Russian losses at war against Ukraine
      </Typography>
    </AppBar>
  );
};

export default Header;
