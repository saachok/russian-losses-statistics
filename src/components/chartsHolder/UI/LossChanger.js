import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
    <Box sx={{ minWidth: 120, width: 220, marginTop: "8px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Loss</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={loss}
          label="Loss"
          onChange={handleChange}
        >
          <MenuItem value={"personnel_units"}>Personnel units</MenuItem>
          <MenuItem value={"tanks"}>Tanks</MenuItem>
          <MenuItem value={"armoured_fighting_vehicles"}>
            Armoured flighting vehicles
          </MenuItem>
          <MenuItem value={"artillery_systems"}>Artillery systems</MenuItem>
          <MenuItem value={"mlrs"}>MLRS</MenuItem>
          <MenuItem value={"aa_warfare_systems"}>AA warfare systems</MenuItem>
          <MenuItem value={"planes"}>Planes</MenuItem>
          <MenuItem value={"helicopters"}>Helicopters</MenuItem>
          <MenuItem value={"vehicles_fuel_tanks"}>
            Vehicles and fuel tanks
          </MenuItem>
          <MenuItem value={"warships_cutters"}>Warships/cutters</MenuItem>
          <MenuItem value={"cruise_missiles"}>Cruise missiles</MenuItem>
          <MenuItem value={"uav_systems"}>UAV systems</MenuItem>
          <MenuItem value={"special_military_equip"}>
            Special military equipment
          </MenuItem>
          <MenuItem value={"atgm_srbm_systems"}>ATGM/SRBM systems</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default LossChanger;
