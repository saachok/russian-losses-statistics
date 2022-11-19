import { Container } from "@mui/material";

import Header from "./components/Header";
import ChartsHolder from "./components/chartsHolder/ChartsHolder";

function App() {
  return (
    <Container
      fixed
      sx={{ height: "100vh", margin: 0, padding: 0 }}
      maxWidth="false"
    >
      <Header />
      <ChartsHolder />
    </Container>
  );
}

export default App;
