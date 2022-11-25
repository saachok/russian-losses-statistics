import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MonthChanger from "./UI/MonthChanger";
import LossChanger from "./UI/LossChanger";

const LossesSelector = (props) => {
  const [month, setMonth] = useState("");
  const [loss, setLoss] = useState("");

  let API = "";

  switch (month) {
    case "February":
      API = "https://russianwarship.rip/api/v1/statistics?offset=0&limit=3";
      break;
    case "March":
      API = "https://russianwarship.rip/api/v1/statistics?offset=3&limit=31";
      break;
    case "April":
      API = "https://russianwarship.rip/api/v1/statistics?offset=34&limit=30";
      break;
    case "May":
      API = "https://russianwarship.rip/api/v1/statistics?offset=64&limit=31";
      break;
    case "June":
      API = "https://russianwarship.rip/api/v1/statistics?offset=95&limit=30";
      break;
    case "July":
      API = "https://russianwarship.rip/api/v1/statistics?offset=125&limit=31";
      break;
    case "August":
      API = "https://russianwarship.rip/api/v1/statistics?offset=156&limit=31";
      break;
    case "September":
      API = "https://russianwarship.rip/api/v1/statistics?offset=187&limit=30";
      break;
    case "October":
      API = "https://russianwarship.rip/api/v1/statistics?offset=217&limit=31";
      break;
    default:
      break;
  }

  useEffect(() => {
    if (month !== "") {
      fetchData();
    }
  }, [month, loss]);

  const fetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();

    const date = data.data.records.map((element) => element.date);
    const losses = {
      title: loss,
      amount: data.data.records.map((element) => element.stats[`${loss}`]),
    };

    props.sendData(date, losses);
  };

  const setMonthState = (month) => {
    setMonth(() => month);
  };

  const setLossState = (loss) => {
    setLoss(() => loss);
  };

  return (
    <Box
      display="flex"
      paddingLeft="2rem"
      justifyContent="start"
      alignItems="center"
      gap="1rem"
    >
      <MonthChanger getMonth={setMonthState} />
      <LossChanger getLoss={setLossState} />
    </Box>
  );
};

export default LossesSelector;
