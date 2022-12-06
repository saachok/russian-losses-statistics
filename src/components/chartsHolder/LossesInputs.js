import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
// import MonthChanger from "./inputChangers/MonthChanger";
import LossChanger from "./inputChangers/LossChanger";
import ErrorModal from "../UI/ErrorModal";
import DateRangePickerDemo from "./inputChangers/DateRangePicker";
import { millisecondsToDays, getDateRangeLength } from "../../utils.js";
import { DATE_2022_02_27 } from "../../constants";

const LossesSelector = ({ sendData }) => {
  const [dateRange, setDateRange] = useState({ dateFrom: null, dateTo: null });
  const [apiParams, setApiParams] = useState({ offset: null, limit: null });
  const [loss, setLoss] = useState("");
  const [losses, setLosses] = useState({ date: [], losses: {} });
  const [error, setError] = useState(false);
  // console.log(losses);

  useEffect(() => {
    if (dateRange.dateFrom !== null && dateRange.dateTo !== null) {
      fetchAPI(getValidAPI(dateRange.dateFrom, dateRange.dateTo));
    } else {
      console.log("dateRange.dateFrom == null && dateRange.dateTo == null");
    }
  }, [dateRange]);

  const fetchAPI = async (API) => {
    const response = await fetch(API);
    const data = await response.json();

    // console.log(data);

    setLosses(() => {
      return {
        date: data.data.records.map((elem) => elem.date),
        losses: {
          personnel_units: data.data.records.map(
            (elem) => elem.stats.personnel_units
          ),
          tanks: data.data.records.map((elem) => elem.stats.tanks),
          armoured_fighting_vehicles: data.data.records.map(
            (elem) => elem.stats.armoured_fighting_vehicles
          ),
          artillery_systems: data.data.records.map((elem) => elem.stats.tanks),
          mlrs: data.data.records.map((elem) => elem.stats.mlrs),
          aa_warfare_systems: data.data.records.map(
            (elem) => elem.stats.aa_warfare_systems
          ),
          planes: data.data.records.map((elem) => elem.stats.planes),
          helicopters: data.data.records.map((elem) => elem.stats.helicopters),
          vehicles_fuel_tanks: data.data.records.map(
            (elem) => elem.stats.vehicles_fuel_tanks
          ),
          warships_cutters: data.data.records.map(
            (elem) => elem.stats.warships_cutters
          ),
          cruise_missiles: data.data.records.map(
            (elem) => elem.stats.cruise_missiles
          ),
          uav_systems: data.data.records.map((elem) => elem.stats.uav_systems),
          special_military_equip: data.data.records.map(
            (elem) => elem.stats.special_military_equip
          ),
          atgm_srbm_systems: data.data.records.map(
            (elem) => elem.stats.atgm_srbm_systems
          ),
        },
      };
    });

    sendData(losses);

    // Format of data from props that should be
    // {
    //   date: ['1', '2', '3', '4'],
    //   losses: {
    //     tanks: [10, 12, 45, 56],
    //     planes: [2, 5, 6, 8]
    //   }
    // }
  };

  const getValidAPI = (dateFrom, dateTo) => {
    const selectedDate =
      dateRange.dateFrom.getTime() -
      dateRange.dateFrom.getTimezoneOffset() * 60000;

    // +1 for correct calculation of offset to API
    const offset =
      millisecondsToDays(selectedDate - DATE_2022_02_27.getTime()) + 1;
    const limit = getDateRangeLength(dateRange.dateTo, dateRange.dateFrom);

    return `https://russianwarship.rip/api/v1/statistics?offset=${offset}&limit=${limit}`;
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
