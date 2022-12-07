import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { LOSSES_MAP } from "../../../utils/constants";

const DUMMY_LOSSES = {
  date: ["1", "2", "3", "4", "5"],
  losses: [
    {
      label: "Tanks",
      data: [2, 4, 5, 7, 10],
    },
    {
      label: "Planes",
      data: [1, 5, 7, 7, 12],
    },
    {
      label: "Helicopters",
      data: [3, 5, 5, 9, 11],
    },
  ],
};

const BarChart = ({ data }) => {
  // if (data === null) {
  //   data = {
  //     date: [],
  //     losses: {},
  //   };
  // }

  const datasets = DUMMY_LOSSES.losses.map((elem) => {
    return {
      label: elem.label,
      data: elem.data,
      backgroundColor: "rgba(104, 159, 56, 0.6)",
      borderColor: "rgba(72, 111, 39, 1)",
      borderWidth: 1,
    };
  });

  return (
    <div
      style={{
        position: "relative",
        width: "inherit",
        height: "inherit",
      }}
    >
      <Bar
        data={{
          labels: DUMMY_LOSSES.date,
          datasets,
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
