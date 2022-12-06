import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { LOSSES_MAP } from "../../../utils/constants";

const BarChart = ({ data }) => {
  if (data === null) {
    data = {
      date: [],
      losses: {},
    };
  }

  const lossTitle = "constant lossTitle";

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
              data: data.losses.planes,
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
