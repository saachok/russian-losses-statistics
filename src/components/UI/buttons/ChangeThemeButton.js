import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const ChangeThemeButton = () => {
  return (
    <IconButton
      sx={{
        marginLeft: "8px",
        marginRight: "8px",
      }}
    >
      <DarkModeIcon />
    </IconButton>
  );
};

export default ChangeThemeButton;
