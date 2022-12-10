import { Box, styled, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";

import BarChart from "./charts/BarChart";
import LossesInputs from "./LossesInputs";

const PaperWrapper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "inherit",
  height: "inherit",
  backgroundColor: "#d8fcac",
  padding: "1rem",
});

const ChartsHolder = () => {
  const [losses, setLosses] = useState(null);
  const [identifiers, setIdentifiers] = useState([]);
  const [chartData, setChartData] = useState({
    date: [],
    losses: [{ label: "", data: [] }],
  });

  useEffect(() => {
    if (losses === null) {
      return;
    }
    setChartData(filterChartData(losses, identifiers));
    console.log("chartData: ", chartData);
  }, [losses, identifiers]);

  const filterChartData = (losses, identifiers) => {
    return {
      date: losses.date,
      losses: losses.losses.filter((elem) => identifiers.includes(elem.label)),
    };
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingTop="1rem"
      sx={{
        width: {
          xs: "300px",
          sm: "500px",
          md: "800px",
          lg: "1100px",
        },
        height: "450px",
      }}
    >
      <PaperWrapper elevation={4}>
        <BarChart data={chartData} />
        <LossesInputs sendData={setLosses} setIdentifiers={setIdentifiers} />
      </PaperWrapper>
    </Box>
  );
};

export default ChartsHolder;
