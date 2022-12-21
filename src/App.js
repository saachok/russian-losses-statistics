import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import ButtonsHolder from "./components/ButtonsHolder";
import ChartsHolder from "./components/chartsHolder/ChartsHolder";
import { LIGHT_PALETTE, DARK_PALETTE } from "./utils/constants";

const getDesignTokens = (mode) => {
  return mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
};

function App() {
  const [mode, setMode] = useState("light");

  const lightModeTheme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={lightModeTheme}>
      <CssBaseline />
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          margin: 0,
          padding: 0,
          backgroundColor: `backgroundColor.body`,
          overflow: "hidden",
        }}
      >
        <Header />
        <ButtonsHolder mode={mode} setMode={setMode} />
        <ChartsHolder />
      </Container>
    </ThemeProvider>
  );
}

export default App;
