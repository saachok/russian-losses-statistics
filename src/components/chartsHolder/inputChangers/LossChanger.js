import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const LOSSES_MAP = {
  personnel_units: "Personnel units",
  tanks: "Tanks",
  armoured_fighting_vehicles: "Armoured flighting vehicles",
  artillery_systems: "Artillery systems",
  mlrs: "MLRS",
  aa_warfare_systems: "AA warfare systems",
  planes: "Planes",
  helicopters: "Helicopters",
  vehicles_fuel_tanks: "Vehicles and fuel tanks",
  warships_cutters: "Warships/cutters",
  cruise_missiles: "Cruise missiles",
  uav_systems: "UAV systems",
  special_military_equip: "Special military equipment",
  atgm_srbm_systems: "ATGM/SRBM systems",
};

const LossChanger = (props) => {
  const [loss, setMonth] = React.useState("");

  useEffect(() => {
    if (loss !== "") {
      props.getLoss(loss);
    }
  }, [loss, props]);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <Box
      sx={{
        width: {
          xs: "90px",
          sm: "120px",
          md: "150px",
          lg: "180px",
          xl: "210px",
        },
        marginTop: "8px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Loss</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={loss}
          label="Loss"
          onChange={handleChange}
        >
          {Object.entries(LOSSES_MAP).map((param) => (
            <MenuItem key={param[0]} value={param[0]}>
              {param[1]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default LossChanger;
