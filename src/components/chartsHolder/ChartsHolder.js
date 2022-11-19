import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";

import MonthChanger from "./MonthChanger";
import BarChart from "./charts/BarChart";

const ChartsHolder = () => {
  const [losses, setLosses] = useState(null);

  useEffect(() => {
    if (losses === null) {
      return;
    }
    printData(losses);
  }, [losses]);

  const printData = (data) => {
    console.log(data);
  };

  const getData = (data) => {
    setLosses(() => {
      return {
        date: data.data.records.map((element) => element.date),
        personnel_units: data.data.records.map(
          (element) => element.stats.personnel_units
        ),

        tanks: data.data.records.map((element) => element.stats.tanks),

        armoured_fighting_vehicles: data.data.records.map(
          (element) => element.stats.tanks
        ),

        artillery_systems: data.data.records.map(
          (element) => element.stats.artillery_systems
        ),

        mlrs: data.data.records.map((element) => element.stats.mlrs),

        aa_warfare_systems: data.data.records.map(
          (element) => element.stats.aa_warfare_systems
        ),

        planes: data.data.records.map((element) => element.stats.planes),

        helicopters: data.data.records.map(
          (element) => element.stats.helicopters
        ),

        vehicles_fuel_tanks: data.data.records.map(
          (element) => element.stats.vehicles_fuel_tanks
        ),

        warships_cutters: data.data.records.map(
          (element) => element.stats.warships_cutters
        ),

        cruise_missiles: data.data.records.map(
          (element) => element.stats.cruise_missiles
        ),

        uav_systems: data.data.records.map(
          (element) => element.stats.uav_systems
        ),

        special_military_equip: data.data.records.map(
          (element) => element.stats.special_military_equip
        ),

        atgm_srbm_systems: data.data.records.map(
          (element) => element.stats.atgm_srbm_systems
        ),
      };
    });
  };

  return (
    <Box>
      <MonthChanger sendData={getData} />
      <BarChart data={losses} />
    </Box>
  );
};

export default ChartsHolder;