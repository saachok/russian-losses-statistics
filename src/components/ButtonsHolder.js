import { Paper } from "@mui/material";
import React from "react";
import ChangeThemeButton from "./UI/buttons/ChangeThemeButton";
import useMediaQuery from "@mui/material/useMediaQuery";

const ButtonsHolder = ({ mode, setMode }) => {
  const wideScreen = useMediaQuery("(min-width:423px)");
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        top: wideScreen ? "3.5rem" : "5.5rem",

        backgroundColor: "backgroundColor.component",
      }}
    >
      <ChangeThemeButton mode={mode} setMode={setMode} />
    </Paper>
  );
};

export default ButtonsHolder;
