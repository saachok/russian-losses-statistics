import * as React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

import { differenceInDays } from "date-fns";

// const testDate = () => {
//   let date1 = new Date("2022-11-24");
//   let date2 = new Date(date1 - daysToMilliseconds(1));
//   console.log("date1: ", date1);
//   console.log("date2: ", date2.toString());
// };

// testDate();

const DateRangePickerDemo = () => {
  const [dates, setDates] = React.useState([null, null]);

  const daysToMilliseconds = (days) => {
    return days * 24 * 60 * 60 * 1000;
  };

  const disableOutOfRange = (date) => {
    let currentDateToMilliseconds = date["$d"].getTime();
    if (dates[0] !== null) {
      let topBorderDateMilliseconds =
        dates[0]["$d"].getTime() + daysToMilliseconds(50);

      if (currentDateToMilliseconds >= topBorderDateMilliseconds) {
        return true;
      } else if (dates[1] !== null) {
        let botBorderDateMilliseconds =
          dates[1]["$d"].getTime() - daysToMilliseconds(50);
        if (currentDateToMilliseconds <= botBorderDateMilliseconds) {
          return true;
        } else return false;
      }
    }
  };

  const getDateRangeLength = (end, start) => {
    return 1 + differenceInDays(end, start);
  };

  const printDateRangeLength = (end, start) => {
    console.log("Date range (in days): ", getDateRangeLength(end, start));
  };

  if (dates[0] !== null && dates[1] !== null) {
    printDateRangeLength(dates[1]["$d"], dates[0]["$d"]);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        displayStaticWrapperAs="desktop"
        minDate={new Date("2022-02-24")}
        shouldDisableDate={(date) => disableOutOfRange(date)}
        disableFuture
        value={dates}
        onChange={(newValue) => {
          setDates(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField
              {...startProps}
              helperText="Range should be less then 50 (1 ≤ range ≤ 50)"
            />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangePickerDemo;
