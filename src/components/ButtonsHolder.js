import { Paper } from "@mui/material";
import React from "react";
import ChangeThemeButton from "./UI/buttons/ChangeThemeButton";

const ButtonsHolder = ({ mode, setMode }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        top: "60px",
        backgroundColor: "backgroundColor.component",
      }}
    >
      <ChangeThemeButton mode={mode} setMode={setMode} />
    </Paper>
  );
};

export default ButtonsHolder;
