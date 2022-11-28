import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MonthChanger = (props) => {
  const [month, setMonth] = React.useState("");

  useEffect(() => {
    if (month !== "") {
      props.getMonth(month);
    }
  }, [month, props]);

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
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Month"
          onChange={handleChange}
        >
          <MenuItem value={"February"}>February</MenuItem>
          <MenuItem value={"March"}>March</MenuItem>
          <MenuItem value={"April"}>April</MenuItem>
          <MenuItem value={"May"}>May</MenuItem>
          <MenuItem value={"June"}>June</MenuItem>
          <MenuItem value={"July"}>July</MenuItem>
          <MenuItem value={"August"}>August</MenuItem>
          <MenuItem value={"September"}>September</MenuItem>
          <MenuItem value={"October"}>October</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default MonthChanger;
