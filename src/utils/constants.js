export const DATE_2022_02_27 = new Date("2022-02-27");

export const MAX_AVAILABLE_DAYS_RANGE = 50;

export const INITIAL_CHART_DATA = {
  date: [],
  losses: [{ label: "", data: [] }],
};

export const LOSSES_MAP = {
  personnel_units: {
    label: "Personnel units",
    backgroundColor: "rgba(168, 46, 46, 0.6)",
    borderColor: "rgba(168, 46, 46, 1)",
  },

  tanks: {
    label: "Tanks",
    backgroundColor: "rgba(211, 142, 52, 0.6)",
    borderColor: "rgba(211, 142, 52, 1)",
  },

  armoured_fighting_vehicles: {
    label: "Armoured flighting vehicles",
    backgroundColor: "rgba(208, 211, 52, 0.6)",
    borderColor: "rgba(208, 211, 52, 1)",
  },

  artillery_systems: {
    label: "Artillery systems",
    backgroundColor: "rgba(211, 195, 52, 0.6)",
    borderColor: "gba(211, 195, 52, 1)",
  },

  mlrs: {
    label: "MLRS",
    backgroundColor: "rgba(168, 211, 52, 0.6)",
    borderColor: "rgba(168, 211, 52, 1)",
  },

  aa_warfare_systems: {
    label: "AA warfare systems",
    backgroundColor: "rgba(110, 211, 52, 0.6)",
    borderColor: "rgba(110, 211, 52, 1)",
  },

  planes: {
    label: "Planes",
    backgroundColor: "rgba(52, 211, 92, 0.6)",
    orderdColor: "rgba(52, 211, 92, 1)",
  },

  helicopters: {
    label: "Helicopters",
    backgroundColor: "rgba(52, 211, 203, 0.6)",
    borderColor: "rgba(52, 211, 203, 1)",
  },

  vehicles_fuel_tanks: {
    label: "Vehicles and fuel tanks",
    backgroundColor: "rgba(52, 139, 211, 0.6)",
    borderColor: "rgba(52, 139, 211, 1)",
  },

  warships_cutters: {
    label: "Warships/cutters",
    backgroundColor: "rgba(52, 89, 211, 0.6)",
    orderdColor: "rgba(52, 89, 211, 1)",
  },

  cruise_missiles: {
    label: "Cruise missiles",
    backgroundColor: "rgba(76, 52, 211, 0.6)",
    orderdColor: "rgba(76, 52, 211, 1)",
  },

  uav_systems: {
    label: "UAV systems",
    backgroundColor: "rgba(126, 52, 211, 0.6)",
    borderColor: "rgba(126, 52, 211, 1)",
  },

  special_military_equip: {
    label: "Special military equipment",
    backgroundColor: "rgba(206, 52, 211, 0.6)",
    borderColor: "rgba(206, 52, 211, 1)",
  },

  atgm_srbm_systems: {
    label: "ATGM/SRBM systems",
    backgroundColor: "rgba(211, 52, 92, 0.6)",
    orderdColor: "rgba(211, 52, 92, 1)",
  },
};

export const LOSS_COLORS = {};
