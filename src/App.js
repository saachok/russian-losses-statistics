import Header from "./components/Header";
import ChartsHolder from "./components/chartsHolder/ChartsHolder";
import { Container, createTheme, ThemeProvider, useTheme } from "@mui/material";
import ButtonsHolder from "./components/ButtonsHolder";
import { LIGHT_PALETTE, DARK_PALETTE } from "./utils/constants";
import CssBaseline from "@mui/material/CssBaseline";

const getDesignTokens = (mode) => {
  return mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
};

const lightModeTheme = createTheme(getDesignTokens("light"));

// const theme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

function App() {
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
        <ButtonsHolder />
        <ChartsHolder />
      </Container>
    </ThemeProvider>
  );
}

export default App;
