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
};
