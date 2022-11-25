import { Container } from "@mui/material";

import Header from "./components/Header";
import ChartsHolder from "./components/chartsHolder/ChartsHolder";

function App() {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Header />
      <ChartsHolder />
    </Container>
  );
}

export default App;
