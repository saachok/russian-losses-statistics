import { Box, styled, Paper, Stack } from "@mui/material";
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

  useEffect(() => {
    if (losses === null) {
      return;
    }
    // console.log("losses: ", losses);
  }, [losses]);

  const getData = ({ date, losses }) => {
    setLosses({ date, losses });
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
        <BarChart data={losses} />
        <LossesInputs sendData={getData} />
      </PaperWrapper>
    </Box>
  );
};

export default ChartsHolder;
