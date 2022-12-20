import { millisecondsToDays, getDateRangeLength } from "./dateFunctions";
import {
  DATE_2022_02_27,
  INITIAL_CHART_DATA,
  LOSSES_COLORS,
} from "./constants";

export const getValidAPI = (dateFrom, dateTo) => {
  // console.log("dateFrom:", dateFrom);
  // console.log("dateTo:", dateTo.toISOString());

  const selectedDate =
    dateFrom.getTime() - dateFrom.getTimezoneOffset() * 60000;

  // +1 for correct calculation of offset to API
  const offset =
    millisecondsToDays(selectedDate - DATE_2022_02_27.getTime()) + 1;
  const limit = getDateRangeLength(dateTo, dateFrom);

  return `https://russianwarship.rip/api/v1/statistics?offset=${offset}&limit=${limit}`;
};

// Need to refactory this large formatData func
// Make it dynamic instead of static

export const formatData = (data) => {
  // console.log("Start data: ", data);
  return {
    date: data.data.records.map((elem) => elem.date),
    losses: [
      {
        label: "Personnel units",
        data: data.data.records.map((elem) => elem.stats.personnel_units),
        backgroundColor: LOSSES_COLORS.brown.backgroundColor,
        borderColor: LOSSES_COLORS.brown.borderColor,
      },
      {
        label: "Tanks",
        data: data.data.records.map((elem) => elem.stats.tanks),
        backgroundColor: LOSSES_COLORS.orange.backgroundColor,
        borderColor: LOSSES_COLORS.orange.borderColor,
      },
      {
        label: "Armoured flighting vehicles",
        data: data.data.records.map(
          (elem) => elem.stats.armoured_fighting_vehicles
        ),
        backgroundColor: LOSSES_COLORS.yellow.backgroundColor,
        borderColor: LOSSES_COLORS.yellow.borderColor,
      },
      {
        label: "Artillery systems",
        data: data.data.records.map((elem) => elem.stats.artillery_systems),
        backgroundColor: LOSSES_COLORS.darkYellow.backgroundColor,
        borderColor: LOSSES_COLORS.darkYellow.borderColor,
      },
      {
        label: "MLRS",
        data: data.data.records.map((elem) => elem.stats.mlrs),
        backgroundColor: LOSSES_COLORS.lightGreen.backgroundColor,
        borderColor: LOSSES_COLORS.lightGreen.borderColor,
      },
      {
        label: "AA warfare systems",
        data: data.data.records.map((elem) => elem.stats.aa_warfare_systems),
        backgroundColor: LOSSES_COLORS.green.backgroundColor,
        borderColor: LOSSES_COLORS.green.borderColor,
      },
      {
        label: "Planes",
        data: data.data.records.map((elem) => elem.stats.planes),
        backgroundColor: LOSSES_COLORS.darkGreen.backgroundColor,
        borderColor: LOSSES_COLORS.darkGreen.borderColor,
      },
      {
        label: "Helicopters",
        data: data.data.records.map((elem) => elem.stats.helicopters),
        backgroundColor: LOSSES_COLORS.lightBlue.backgroundColor,
        borderColor: LOSSES_COLORS.lightBlue.borderColor,
      },
      {
        label: "Vehicles and fuel tanks",
        data: data.data.records.map((elem) => elem.stats.vehicles_fuel_tanks),
        backgroundColor: LOSSES_COLORS.blue.backgroundColor,
        borderColor: LOSSES_COLORS.blue.borderColor,
      },
      {
        label: "Warships/cutters",
        data: data.data.records.map((elem) => elem.stats.warships_cutters),
        backgroundColor: LOSSES_COLORS.darkBlue.backgroundColor,
        borderColor: LOSSES_COLORS.darkBlue.borderColor,
      },
      {
        label: "Cruise missiles",
        data: data.data.records.map((elem) => elem.stats.cruise_missiles),
        backgroundColor: LOSSES_COLORS.darkPurple.backgroundColor,
        borderColor: LOSSES_COLORS.darkPurple.borderColor,
      },
      {
        label: "UAV systems",
        data: data.data.records.map((elem) => elem.stats.uav_systems),
        backgroundColor: LOSSES_COLORS.purple.backgroundColor,
        borderColor: LOSSES_COLORS.purple.borderColor,
      },
      {
        label: "Special military equipment",
        data: data.data.records.map(
          (elem) => elem.stats.special_military_equip
        ),
        backgroundColor: LOSSES_COLORS.pink.backgroundColor,
        borderColor: LOSSES_COLORS.pink.borderColor,
      },
      {
        label: "ATGM/SRBM systems",
        data: data.data.records.map((elem) => elem.stats.atgm_srbm_systems),
        backgroundColor: LOSSES_COLORS.coral.backgroundColor,
        borderColor: LOSSES_COLORS.coral.borderColor,
      },
    ],
  };
};

export const filterChartData = (losses, identifiers) => {
  return {
    date: losses.date,
    losses: identifiers.length
      ? losses.losses.filter((elem) => identifiers.includes(elem.label))
      : INITIAL_CHART_DATA.losses,
  };
};

export const fetchAPI = async (url, handleSuccess, handleError) => {
  try {
    const response = await fetch(url);
    // console.log("fetchAPI -response:", response);

    const data = await response.json();
    // console.log("fetchAPI -data:", data);

    const losses = formatData(data);
    // console.log("fetchAPI -losses:", losses);

    handleSuccess(losses);
  } catch (error) {
    // console.log(error);
    // console.log("fetchAPI -error:", error);
    handleError(error);
  }
};
