import {
  pink,
  purple,
  deepPurple,
  blue,
  lightBlue,
  yellow,
  orange,
  brown,
  lightGreen,
  green,
  grey,
} from "@mui/material/colors";

export const DATE_2022_02_27 = new Date("2022-02-27");

export const MAX_AVAILABLE_DAYS_RANGE = 50;

export const INITIAL_CHART_DATA = {
  date: [],
  losses: [{ label: "", data: [] }],
};

export const LOSSES_COLORS = {
  brown: {
    backgroundColor: brown[500],
    borderColor: grey[900],
    // backgroundColor: "rgba(168, 46, 46, 0.85)",
    // borderColor: "rgba(168, 46, 46, 1)",
  },
  orange: {
    backgroundColor: orange[500],
    borderColor: grey[900],
  },
  yellow: {
    backgroundColor: yellow[500],
    borderColor: grey[900],
  },
  darkYellow: {
    backgroundColor: yellow[700],
    borderColor: grey[900],
  },
  lightGreen: {
    backgroundColor: lightGreen["A200"],
    borderColor: grey[900],
  },
  green: {
    backgroundColor: lightGreen["A400"],
    borderColor: grey[900],
  },
  darkGreen: {
    backgroundColor: lightGreen["A700"],
    borderColor: grey[900],
  },
  lightBlue: {
    backgroundColor: lightBlue[500],
    borderColor: grey[900],
  },
  blue: {
    backgroundColor: blue[500],
    borderColor: grey[900],
  },
  darkBlue: {
    backgroundColor: blue[900],
    borderColor: grey[900],
  },
  darkPurple: {
    backgroundColor: deepPurple[500],
    borderColor: grey[900],
  },
  purple: {
    backgroundColor: purple[500],
    borderColor: grey[900],
  },
  pink: {
    backgroundColor: pink[500],
    borderColor: grey[900],
  },
  coral: {
    backgroundColor: pink[800],
    borderColor: grey[900],
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
    secondary: {
      main: green[900],
    },
    backgroundColor: {
      header: lightGreen[700],
      body: lightGreen[400],
      component: lightGreen[300],
    },
    text: {
      header: grey[900],
      primary: grey[900],
      secondary: grey[900],
    },
  },
};

export const DARK_PALETTE = {
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: green[900],
    },
    backgroundColor: {
      header: green[900],
      body: green[600],
      component: green[400],
    },
    text: {
      header: grey[200],
      primary: grey[900],
      secondary: grey[900],
    },
  },
};
