import { lightGreen, green, grey, lime, red } from "@mui/material/colors";

export const DATE_2022_02_27 = new Date("2022-02-27");

export const MAX_AVAILABLE_DAYS_RANGE = 50;

export const INITIAL_CHART_DATA = {
  date: [],
  losses: [{ label: "", data: [] }],
};

export const LOSSES_COLORS = {
  brown: {
    backgroundColor: "rgba(168, 46, 46, 0.85)",
    borderColor: "rgba(168, 46, 46, 1)",
  },
  orange: {
    backgroundColor: "rgba(211, 142, 52, 0.85)",
    borderColor: "rgba(211, 142, 52, 1)",
  },
  yellow: {
    backgroundColor: "rgba(208, 211, 52, 0.85)",
    borderColor: "rgba(208, 211, 52, 1)",
  },
  darkYellow: {
    backgroundColor: "rgba(211, 195, 52, 0.85)",
    borderColor: "gba(211, 195, 52, 1)",
  },
  lightGreen: {
    backgroundColor: "rgba(168, 211, 52, 0.85)",
    borderColor: "rgba(168, 211, 52, 1)",
  },
  green: {
    backgroundColor: "rgba(110, 211, 52, 0.85)",
    borderColor: "rgba(110, 211, 52, 1)",
  },
  darkGreen: {
    backgroundColor: "rgba(52, 211, 92, 0.85)",
    borderColor: "rgba(52, 211, 92, 1)",
  },
  lightBlue: {
    backgroundColor: "rgba(52, 211, 203, 0.85)",
    borderColor: "rgba(52, 211, 203, 1)",
  },
  blue: {
    backgroundColor: "rgba(52, 139, 211, 0.85)",
    borderColor: "rgba(52, 139, 211, 1)",
  },
  darkBlue: {
    backgroundColor: "rgba(52, 89, 211, 0.85)",
    borderColor: "rgba(52, 89, 211, 1)",
  },
  darkPurple: {
    backgroundColor: "rgba(76, 52, 211, 0.85)",
    borderColor: "rgba(76, 52, 211, 1)",
  },
  purple: {
    backgroundColor: "rgba(126, 52, 211, 0.85)",
    borderColor: "rgba(126, 52, 211, 1)",
  },
  pink: {
    backgroundColor: "rgba(206, 52, 211, 0.85)",
    borderColor: "rgba(206, 52, 211, 1)",
  },
  coral: {
    backgroundColor: "rgba(211, 52, 92, 0.85)",
    borderColor: "rgba(211, 52, 92, 1)",
  },
};

export const LOSSES_MAP = {
  personnel_units: {
    label: "Personnel units",
    backgroundColor: LOSSES_COLORS.brown.backgroundColor,
    borderColor: LOSSES_COLORS.brown.borderColor,
  },

  tanks: {
    label: "Tanks",
    backgroundColor: LOSSES_COLORS.orange.backgroundColor,
    borderColor: LOSSES_COLORS.orange.borderColor,
  },

  armoured_fighting_vehicles: {
    label: "Armoured flighting vehicles",
    backgroundColor: LOSSES_COLORS.yellow.backgroundColor,
    borderColor: LOSSES_COLORS.yellow.borderColor,
  },

  artillery_systems: {
    label: "Artillery systems",
    backgroundColor: LOSSES_COLORS.darkYellow.backgroundColor,
    borderColor: LOSSES_COLORS.darkYellow.borderColor,
  },

  mlrs: {
    label: "MLRS",
    backgroundColor: LOSSES_COLORS.lightGreen.backgroundColor,
    borderColor: LOSSES_COLORS.lightGreen.borderColor,
  },

  aa_warfare_systems: {
    label: "AA warfare systems",
    backgroundColor: LOSSES_COLORS.green.backgroundColor,
    borderColor: LOSSES_COLORS.green.borderColor,
  },

  planes: {
    label: "Planes",
    backgroundColor: LOSSES_COLORS.darkGreen.backgroundColor,
    borderColor: LOSSES_COLORS.darkGreen.borderColor,
  },

  helicopters: {
    label: "Helicopters",
    backgroundColor: LOSSES_COLORS.lightBlue.backgroundColor,
    borderColor: LOSSES_COLORS.lightBlue.borderColor,
  },

  vehicles_fuel_tanks: {
    label: "Vehicles and fuel tanks",
    backgroundColor: LOSSES_COLORS.blue.backgroundColor,
    borderColor: LOSSES_COLORS.blue.borderColor,
  },

  warships_cutters: {
    label: "Warships/cutters",
    backgroundColor: LOSSES_COLORS.darkBlue.backgroundColor,
    borderColor: LOSSES_COLORS.darkBlue.borderColor,
  },

  cruise_missiles: {
    label: "Cruise missiles",
    backgroundColor: LOSSES_COLORS.darkPurple.backgroundColor,
    borderColor: LOSSES_COLORS.darkPurple.borderColor,
  },

  uav_systems: {
    label: "UAV systems",
    backgroundColor: LOSSES_COLORS.purple.backgroundColor,
    borderColor: LOSSES_COLORS.purple.borderColor,
  },

  special_military_equip: {
    label: "Special military equipment",
    backgroundColor: LOSSES_COLORS.pink.backgroundColor,
    borderColor: LOSSES_COLORS.pink.borderColor,
  },

  atgm_srbm_systems: {
    label: "ATGM/SRBM systems",
    backgroundColor: LOSSES_COLORS.coral.backgroundColor,
    borderColor: LOSSES_COLORS.coral.borderColor,
  },
};

export const LOSS_COLORS = {};

export const LIGHT_PALETTE = {
  palette: {
    primary: {
      main: lightGreen[600],
    },
    backgroundColor: {
      header: lightGreen[700],
      body: lightGreen[400],
      component: lightGreen[300],
    },
    text: {
      primary: grey[900],
      secondary: grey[900],
    },
  },
};

export const DARK_PALETTE = {
  palette: {
    primary: {
      main: green[900],
    },
    backgroundColor: {
      default: lightGreen[700],
    },
    text: {
      primary: grey[800],
      secondary: lightGreen[100],
    },
  },
};
