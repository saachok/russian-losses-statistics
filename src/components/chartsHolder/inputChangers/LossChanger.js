import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LOSSES_MAP } from "../../../utils/constants";
import { Checkbox, ListItemText } from "@mui/material";

const LossChanger = ({ getLoss }) => {
  const [loss, setLoss] = React.useState([]);

  useEffect(() => {
    // if (!loss.length) {
    //   return;
    // }
    getLoss(loss);
  }, [loss]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLoss(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box
      sx={{
        width: "250px",
        // width: {
        //   xs: "90px",
        //   sm: "120px",
        //   md: "150px",
        //   lg: "180px",
        //   xl: "210px",
        // },
        marginTop: "8px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="select-label">Loss</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          multiple
          value={loss}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          label="Loss"
        >
          {Object.entries(LOSSES_MAP).map((param) => (
            <MenuItem key={param[1]} value={param[1]}>
              <Checkbox checked={loss.indexOf(param[1]) > -1} />
              <ListItemText primary={param[1]} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default LossChanger;
