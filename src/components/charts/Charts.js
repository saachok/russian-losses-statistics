import { Box, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";

import MonthChanger from "./MonthChanger";

const Charts = () => {
  const [losses, setLosses] = useState({
    personnel_units: null,
  });

  const getData = (data) => {
    setLosses(() => {
      return {
        personnel_units: data.data.records.map(
          (element) => element.stats.personnel_units
        ),
      };
    });
  };

  return (
    <Box>
      <Typography variant="h4">
        Personnel units: {losses.personnel_units}
      </Typography>
      <Typography variant="h4">Cruise misssles: {}</Typography>
      <MonthChanger sendData={getData} />
    </Box>
  );
};

export default Charts;
