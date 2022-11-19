import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const initialState = {
  aa_warfare_systems: [],
  armoured_fighting_vehicles: [],
  artillery_systems: [],
  atgm_srbm_systems: [],
  cruise_missiles: [],
  date: [],
  helicopters: [],
  mlrs: [],
  personnel_units: [],
  planes: [],
  special_military_equip: [],
  tanks: [],
  uav_systems: [],
  vehicles_fuel_tanks: [],
  warships_cutters: [],
};

const BarChart = ({ data }) => {
  const [losses, setLosses] = useState(initialState);

  useEffect(() => {
    if (data) {
      setLosses(() => data);
    }
  }, [data]);

  console.log("BarChart losses: ", losses);

  // if (!data) {
  //   return null;
  // }

  return (
    <div>
      <Bar
        data={{
          labels: losses.date,
          datasets: [
            {
              label: "Losses stats",
              data: losses.helicopters,
              // [65, 59, 80, 81, 56, 55, 40],
              //   backgroundColor: [
              //     "rgba(255, 99, 132, 0.2)",
              //     "rgba(255, 159, 64, 0.2)",
              //     "rgba(255, 205, 86, 0.2)",
              //     "rgba(75, 192, 192, 0.2)",
              //     "rgba(54, 162, 235, 0.2)",
              //     "rgba(153, 102, 255, 0.2)",
              //     "rgba(201, 203, 207, 0.2)",
              //   ],
              //   borderColor: [
              //     "rgb(255, 99, 132)",
              //     "rgb(255, 159, 64)",
              //     "rgb(255, 205, 86)",
              //     "rgb(75, 192, 192)",
              //     "rgb(54, 162, 235)",
              //     "rgb(153, 102, 255)",
              //     "rgb(201, 203, 207)",
              //   ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        // width={"40%"}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default BarChart;
