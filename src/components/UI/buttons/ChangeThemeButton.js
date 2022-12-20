import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const ChangeThemeButton = () => {
  const [lightTheme, setLightTheme] = useState(true);

  const switchTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <IconButton
      sx={{
        marginLeft: "8px",
        marginRight: "8px",
      }}
    >
      {lightTheme ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ChangeThemeButton;
