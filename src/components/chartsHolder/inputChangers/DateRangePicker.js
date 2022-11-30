import * as React from "react";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro";
import { differenceInDays } from "date-fns";

import Box from "@mui/material/Box";

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = React.useState([null, null]);

  // console.log("value: ", value);

  if (value[0] !== null && value[1] !== null) {
    // console.log("start date: ", value[0]["$d"]);
    // console.log("end date: ", value[1]["$d"]);
    console.log(
      "Amount of days: ",
      1 + differenceInDays(value[1]["$d"], value[0]["$d"])
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
