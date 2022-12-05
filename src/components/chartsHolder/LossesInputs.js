import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
// import MonthChanger from "./inputChangers/MonthChanger";
import LossChanger from "./inputChangers/LossChanger";
import ErrorModal from "../UI/ErrorModal";
import DateRangePickerDemo from "./inputChangers/DateRangePicker";
import { millisecondsToDays, getDateRangeLength } from "../../utils.js";
import { DATE_2022_02_27 } from "../../constants";

//         range: getDateRangeLength(dates[1]["$d"], dates[0]["$d"]),

const LossesSelector = ({ sendData }) => {
  const [dateRange, setDateRange] = useState({ dateFrom: null, dateTo: null });
  const [apiParams, setApiParams] = useState({ offset: null, limit: null });
  const [loss, setLoss] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (dateRange.dateFrom == null) {
      return;
    }
    calcValidAPI();
    fetchAPI();
  }, [dateRange.dateFrom]);

  const fetchAPI = async () => {
    const response = await fetch(
      `https://russianwarship.rip/api/v1/statistics?offset=${apiParams.offset}&limit=${apiParams.limit}`
    );

    const data = await response.json();

    console.log(data);
  };

  const calcValidAPI = () => {
    const selectedDate =
      dateRange.dateFrom.getTime() -
      dateRange.dateFrom.getTimezoneOffset() * 60000;

    setApiParams(() => {
      return {
        offset:
          // +1 for correct calculation of offset to API
          millisecondsToDays(selectedDate - DATE_2022_02_27.getTime()) + 1,
        limit: getDateRangeLength(dateRange.dateTo, dateRange.dateFrom),
      };
    });
  };

  const setLossState = (loss) => {
    setLoss(() => loss);
  };

  const getDateRange = ({ dateFrom, dateTo }) => {
    setDateRange(() => ({
      dateFrom,
      dateTo,
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
