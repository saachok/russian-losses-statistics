import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LOSSES_MAP } from "./../../../constants";

const LossChanger = ({ getLoss }) => {
  const [loss, setLoss] = React.useState("");

  useEffect(() => {
    if (loss !== "") {
      getLoss(loss);
    }
  }, [loss]);

  const handleChange = (event) => {
    setLoss(event.target.value);
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
