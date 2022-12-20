import { AppBar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      position="absolute"
      enableColorOnDark
      sx={{
        width: "100wv",
        alignItems: "center",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "backgroundColor.header",
      }}
    >
      <Typography variant={"h5"} sx={{ p: 1 }} color="text.header">
        Russian losses at war against Ukraine
      </Typography>
    </AppBar>
  );
};

export default Header;
