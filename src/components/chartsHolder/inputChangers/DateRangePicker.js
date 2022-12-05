import * as React from "react";
import { useEffect } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { disableOutOfRange, getDateRangeLength } from "./../../../utils";

const DateRangePickerDemo = ({ getDateRange }) => {
  const [dates, setDates] = React.useState([null, null]);

  useEffect(() => {
    if (dates[0] !== null && dates[1] !== null) {
      getDateRange({
        dateFrom: dates[0]["$d"],
        dateTo: dates[1]["$d"],
      });
    }
  }, [dates[0], dates[1]]);

  // console.log("dates", dates);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        displayStaticWrapperAs="desktop"
        minDate={new Date("2022-02-27")}
        shouldDisableDate={(date) => disableOutOfRange(date, dates)}
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
