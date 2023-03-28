import * as React from 'react';
import { useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { disableOutOfRange } from '../../../utils/dateFunctions';

const adapter = new AdapterDayjs();

const DateRangePickerDemo = ({ setDateRangeState }) => {
  const [dates, setDates] = React.useState([null, null]);

  useEffect(() => {
    if (dates[0] !== null && dates[1] !== null) {
      setDateRangeState({
        dateFrom: dates[0]['$d'],
        dateTo: dates[1]['$d'],
      });
    }
  }, [dates, setDateRangeState]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        displayStaticWrapperAs="desktop"
        minDate={adapter.date(new Date('2022-02-27'))}
        shouldDisableDate={(date) => disableOutOfRange(date, dates)}
        disableFuture
        value={dates}
        onChange={(newValue) => {
          setDates(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box
              sx={{
                margin: {
                  xs: '4px',
                  sm: '6px',
                  md: '8px',
                },
              }}
            >
              to
            </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangePickerDemo;
