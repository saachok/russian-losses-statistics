import { millisecondsToDays, getDateRangeLength } from "./dateFunctions";
import { DATE_2022_02_27 } from "./constants";

export const getValidAPI = (dateFrom, dateTo) => {
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
  return {
    date: data.data.records.map((elem) => elem.date),
    losses: [
      {
        label: "Personnel units",
        data: data.data.records.map((elem) => elem.stats.personnel_units),
      },
      {
        label: "Tanks",
        data: data.data.records.map((elem) => elem.stats.tanks),
      },
      {
        label: "Armoured flighting vehicles",
        data: data.data.records.map(
          (elem) => elem.stats.armoured_fighting_vehicles
        ),
      },
      {
        label: "Artillery systems",
        data: data.data.records.map((elem) => elem.stats.artillery_systems),
      },
      {
        label: "MLRS",
        data: data.data.records.map((elem) => elem.stats.mlrs),
      },
      {
        label: "AA warfare systems",
        data: data.data.records.map((elem) => elem.stats.aa_warfare_systems),
      },
      {
        label: "Planes",
        data: data.data.records.map((elem) => elem.stats.planes),
      },
      {
        label: "Helicopters",
        data: data.data.records.map((elem) => elem.stats.helicopters),
      },
      {
        label: "Vehicles and fuel tanks",
        data: data.data.records.map((elem) => elem.stats.vehicles_fuel_tanks),
      },
      {
        label: "Warships/cutters",
        data: data.data.records.map((elem) => elem.stats.warships_cutters),
      },
      {
        label: "Cruise missiles",
        data: data.data.records.map((elem) => elem.stats.cruise_missiles),
      },
      {
        label: "UAV systems",
        data: data.data.records.map((elem) => elem.stats.uav_systems),
      },
      {
        label: "Special military equipment",
        data: data.data.records.map(
          (elem) => elem.stats.special_military_equip
        ),
      },
      {
        label: "ATGM/SRBM systems",
        data: data.data.records.map((elem) => elem.stats.atgm_srbm_systems),
      },
    ],
  };
};
