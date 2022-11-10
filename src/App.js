import { Container } from "@mui/material";

import Header from "./components/Header";
import Charts from "./components/charts/Charts";

function App() {
  return (
    <Container
      fixed
      sx={{ height: "100vh", margin: 0, padding: 0 }}
      maxWidth="false"
    >
      <Header />
      <Charts />
    </Container>
  );
}

export default App;
