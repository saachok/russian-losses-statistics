import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const initialState = {
  date: [],
  losses: [],
};

const BarChart = ({ data }) => {
  const [losses, setLosses] = useState(initialState);
  const [lossTitle, setLossTitle] = useState("Select input info");

  useEffect(() => {
    if (data) {
      setLosses(() => data);
    }
  }, [data]);

  useEffect(() => {
    switch (losses.losses.title) {
      case "aa_warfare_systems":
        setLossTitle("AA warfare systems");
        break;
      case "armoured_fighting_vehicles":
        setLossTitle("Armoured fighting vehicles");
        break;
      case "artillery_systems":
        setLossTitle("Artillery systems");
        break;
      case "atgm_srbm_systems":
        setLossTitle("ATGM/SRBM systems");
        break;
      case "cruise_missiles":
        setLossTitle("Cruise missiles");
        break;
      case "helicopters":
        setLossTitle("Helicopters");
        break;
      case "mlrs":
        setLossTitle("MLRS");
        break;
      case "personnel_units":
        setLossTitle("Personnel units");
        break;
      case "planes":
        setLossTitle("Planes");
        break;
      case "special_military_equip":
        setLossTitle("Special military equipment");
        break;
      case "tanks":
        setLossTitle("Tanks");
        break;
      case "uav_systems":
        setLossTitle("UAV systems");
        break;
      case "vehicles_fuel_tanks":
        setLossTitle("Vehicles fuel tanks");
        break;
      case "warships_cutters":
        setLossTitle("Warships cutters");
        break;
      case "undefined":
        setLossTitle("Choose loss");
        break;
    }
  }, [losses.losses.title]);

  return (
    <div>
      <Bar
        data={{
          labels: losses.date,
          datasets: [
            {
              label: lossTitle,
              data: losses.losses.amount,
              backgroundColor: "rgba(104, 159, 56, 0.6)",
              borderColor: "rgba(72, 111, 39, 1)",
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
