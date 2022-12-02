import * as React from "react";
import { useEffect } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

import { differenceInDays } from "date-fns";

const DateRangePickerDemo = (props) => {
  const [dates, setDates] = React.useState([null, null]);

  const daysToMilliseconds = (days) => {
    return days * 24 * 60 * 60 * 1000;
  };

  useEffect(() => {
    if (dates[0] !== null && dates[1] !== null) {
      props.getDateRange({
        startDate: dates[0]["$d"].getTime(),
        range: getDateRangeLength(dates[1]["$d"], dates[0]["$d"]),
      });
    }
  }, [props, dates[0]]);

  // refactor this block of code
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        displayStaticWrapperAs="desktop"
        minDate={new Date("2022-02-27")}
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
