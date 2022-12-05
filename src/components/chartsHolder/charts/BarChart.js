import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { LOSSES_MAP } from "./../../../constants";

// Format of data from props that should be
// {
//   date: ['1', '2', '3', '4'],
//   losses: {
//     tanks: [10, 12, 45, 56],
//     planes: [2, 5, 6, 8]
//   }
// }

const BarChart = ({ data }) => {
  const lossTitle = LOSSES_MAP[data.losses.title];

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
          labels: data.date,
          datasets: [
            {
              label: lossTitle,
              data: data.losses.amount,
              backgroundColor: "rgba(104, 159, 56, 0.6)",
              borderColor: "rgba(72, 111, 39, 1)",
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: lossTitle ? true : false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
