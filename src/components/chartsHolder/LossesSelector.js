import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
// import MonthChanger from "./inputChangers/MonthChanger";
import LossChanger from "./inputChangers/LossChanger";
import ErrorModal from "../UI/ErrorModal";
import DateRangePickerDemo from "./inputChangers/DateRangePicker";

const LossesSelector = (props) => {
  const [dateRange, setDateRange] = useState({ startDate: null, range: null });
  const [loss, setLoss] = useState("");
  const [error, setError] = useState(false);

  const millisecondsToDays = (milliseconds) => {
    return milliseconds / 1000 / 24 / 60 / 60;
  };

  useEffect(() => {
    calcCurrentAPI();
  }, [dateRange.startDate]);

  const calcCurrentAPI = () => {
    const firstDayMilliseconds = new Date("2022-02-24")
      .toISOString()
      .split("T")[0];
    // const offsetDay = millisecondsToDays(
    //   dateRange.startDate - firstDayMilliseconds
    // );

    console.log("firstDayMilliseconds: ", firstDayMilliseconds);
    console.log("dateRange.startDate: ", dateRange.startDate);
    // console.log("offsetDay: ", offsetDay);
  };

  // const minDateMilliseconds = new Date("2022-02-24").getTime();

  // console.log(minDateMilliseconds);
  // console.log(startDate);
  // console.log(millisecondsToDays(startDate));
  // let API = "";

  // switch (month) {
  //   case "February":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=0&limit=3";
  //     break;
  //   case "March":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=3&limit=31";
  //     break;
  //   case "April":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=34&limit=30";
  //     break;
  //   case "May":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=64&limit=31";
  //     break;
  //   case "June":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=95&limit=30";
  //     break;
  //   case "July":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=125&limit=31";
  //     break;
  //   case "August":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=156&limit=31";
  //     break;
  //   case "September":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=187&limit=30";
  //     break;
  //   case "October":
  //     API = "https://russianwarship.rip/api/v1/statistics?offset=217&limit=31";
  //     break;
  //   default:
  //     break;
  // }

  // useEffect(() => {
  //   if (dateRange.startDate !== "") {
  //     fetchData();
  //   }
  // }, [dateRange.startDate, loss]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(API);

  //     const data = await response.json();

  //     const date = data.data.records.map((element) => element.date);
  //     const losses = {
  //       title: loss,
  //       amount: data.data.records.map((element) => element.stats[`${loss}`]),
  //     };

  //     props.sendData(date, losses);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  const setLossState = (loss) => {
    setLoss(() => loss);
  };

  const getDateRange = ({ startDate, range }) => {
    setDateRange(() => ({
      startDate,
      range,
    }));
  };

  return (
    <Box display="flex" justifyContent="start" alignItems="center" gap="1rem">
      {error && (
        <ErrorModal
          isOpen={!!error}
          errorText={error}
          onClose={() => {
            setError(false);
          }}
        />
      )}
      <DateRangePickerDemo getDateRange={getDateRange} />
      <LossChanger getLoss={setLossState} />
    </Box>
  );
};

export default LossesSelector;
