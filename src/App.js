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
          height: "100vh",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#e0ffbb",
        }}
      >
        <Header />
        <ChartsHolder />
      </Container>
    </ThemeProvider>
  );
}

export default App;
