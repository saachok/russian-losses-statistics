import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import React from "react";
import ChangeThemeButton from "./UI/buttons/ChangeThemeButton";

const ButtonsHolder = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        top: "60px",
        backgroundColor: "backgroundColor.component",
      }}
    >
      <ChangeThemeButton />
    </Paper>
  );
};

export default ButtonsHolder;
