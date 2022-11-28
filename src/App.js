import Header from "./components/Header";
import ChartsHolder from "./components/chartsHolder/ChartsHolder";
import { Container, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9ccc65",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          backgroundColor: "#e0ffbb",

          overflow: "hidden",
        }}
      >
        <Header />
        <ChartsHolder />
      </Container>
    </ThemeProvider>
  );
}

export default App;
