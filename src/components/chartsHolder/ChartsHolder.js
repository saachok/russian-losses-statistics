import React from "react";
import { Box, styled, Paper } from "@mui/material";
import { useState, useEffect } from "react";

import BarChart from "./charts/BarChart";
import LossesInputs from "./LossesInputs";

import { INITIAL_CHART_DATA } from "../../utils/constants";
import { filterChartData } from "../../utils/dataFormatting";

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
  const [chartData, setChartData] = useState(INITIAL_CHART_DATA);

  useEffect(() => {
    if (losses === null) {
      return;
    }
    setChartData(filterChartData(losses, identifiers));
  }, [losses, identifiers]);

  return (
    <Box
      display="flex"
      // alignItems="center"
      // justifyContent="center"

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
