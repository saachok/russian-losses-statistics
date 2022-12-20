import { millisecondsToDays, getDateRangeLength } from "./dateFunctions";
import { DATE_2022_02_27, INITIAL_CHART_DATA } from "./constants";

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
        backgroundColor: "rgba(168, 46, 46, 0.6)",
        borderColor: "rgba(168, 46, 46, 1)",
      },
      {
        label: "Tanks",
        data: data.data.records.map((elem) => elem.stats.tanks),
        backgroundColor: "rgba(211, 142, 52, 0.6)",
        borderColor: "rgba(211, 142, 52, 1)",
      },
      {
        label: "Armoured flighting vehicles",
        data: data.data.records.map(
          (elem) => elem.stats.armoured_fighting_vehicles
        ),
        backgroundColor: "rgba(208, 211, 52, 0.6)",
        borderColor: "rgba(208, 211, 52, 1)",
      },
      {
        label: "Artillery systems",
        data: data.data.records.map((elem) => elem.stats.artillery_systems),
        backgroundColor: "rgba(211, 195, 52, 0.6)",
        borderColor: "rgba(211, 195, 52, 1)",
      },
      {
        label: "MLRS",
        data: data.data.records.map((elem) => elem.stats.mlrs),
        backgroundColor: "rgba(168, 211, 52, 0.6)",
        borderColor: "rgba(168, 211, 52, 1)",
      },
      {
        label: "AA warfare systems",
        data: data.data.records.map((elem) => elem.stats.aa_warfare_systems),
        backgroundColor: "rgba(110, 211, 52, 0.6)",
        borderColor: "rgba(110, 211, 52, 1)",
      },
      {
        label: "Planes",
        data: data.data.records.map((elem) => elem.stats.planes),
        backgroundColor: "rgba(52, 211, 92, 0.6)",
        orderdColor: "rgba(52, 211, 92, 1)",
      },
      {
        label: "Helicopters",
        data: data.data.records.map((elem) => elem.stats.helicopters),
        backgroundColor: "rgba(52, 211, 203, 0.6)",
        borderColor: "rgba(52, 211, 203, 1)",
      },
      {
        label: "Vehicles and fuel tanks",
        data: data.data.records.map((elem) => elem.stats.vehicles_fuel_tanks),
        backgroundColor: "rgba(52, 139, 211, 0.6)",
        borderColor: "rgba(52, 139, 211, 1)",
      },
      {
        label: "Warships/cutters",
        data: data.data.records.map((elem) => elem.stats.warships_cutters),
        backgroundColor: "rgba(52, 89, 211, 0.6)",
        orderdColor: "rgba(52, 89, 211, 1)",
      },
      {
        label: "Cruise missiles",
        data: data.data.records.map((elem) => elem.stats.cruise_missiles),
        backgroundColor: "rgba(76, 52, 211, 0.6)",
        orderdColor: "rgba(76, 52, 211, 1)",
      },
      {
        label: "UAV systems",
        data: data.data.records.map((elem) => elem.stats.uav_systems),
        backgroundColor: "rgba(126, 52, 211, 0.6)",
        borderColor: "rgba(126, 52, 211, 1)",
      },
      {
        label: "Special military equipment",
        data: data.data.records.map(
          (elem) => elem.stats.special_military_equip
        ),
        backgroundColor: "rgba(206, 52, 211, 0.6)",
        borderColor: "rgba(206, 52, 211, 1)",
      },
      {
        label: "ATGM/SRBM systems",
        data: data.data.records.map((elem) => elem.stats.atgm_srbm_systems),
        backgroundColor: "rgba(211, 52, 92, 0.6)",
        orderdColor: "rgba(211, 52, 92, 1)",
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
    console.log("fetchAPI -response:", response);

    const data = await response.json();
    console.log("fetchAPI -data:", data);

    const losses = formatData(data);
    console.log("fetchAPI -losses:", losses);

    handleSuccess(losses);
  } catch (error) {
    console.log(error);
    // console.log("fetchAPI -error:", error);
    handleError(error.messsage);
  }
};
