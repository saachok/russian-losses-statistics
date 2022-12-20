import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const ChangeThemeButton = ({ mode, setMode }) => {
  const switchTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      onClick={switchTheme}
      sx={{
        marginLeft: "8px",
        marginRight: "8px",
      }}
    >
      {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ChangeThemeButton;
