import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MonthChanger = (props) => {
  const [month, setMonth] = React.useState("");
  const [fetchedData, setDetchedData] = useState(null);
  let API = "";

  switch (month) {
    case "February":
      API = "https://russianwarship.rip/api/v1/statistics?offset=0&limit=3";
      break;
    case "March":
      API = "https://russianwarship.rip/api/v1/statistics?offset=3&limit=31";
      break;
    case "April":
      API = "https://russianwarship.rip/api/v1/statistics?offset=34&limit=30";
      break;
    case "May":
      API = "https://russianwarship.rip/api/v1/statistics?offset=64&limit=31";
      break;
    case "June":
      API = "https://russianwarship.rip/api/v1/statistics?offset=95&limit=30";
      break;
    case "July":
      API = "https://russianwarship.rip/api/v1/statistics?offset=125&limit=31";
      break;
    case "August":
      API = "https://russianwarship.rip/api/v1/statistics?offset=156&limit=31";
      break;
    case "September":
      API = "https://russianwarship.rip/api/v1/statistics?offset=187&limit=30";
      break;
    case "October":
      API = "https://russianwarship.rip/api/v1/statistics?offset=217&limit=31";
      break;
    default:
      break;
  }

  const fetchData = async () => {
    const response = await fetch(API);

    const data = await response.json();

    props.sendData(data);
    // console.log(data);
  };

  useEffect(() => {
    if (month !== "") {
      fetchData();
    }
  }, [month]);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "8px" }}>
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
