import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  if (data === null) {
    data = {
      date: [],
      losses: [{ label: null, data: null }],
    };
  }

  const datasets = data.losses.map((elem) => {
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
          labels: data.date,
          datasets,
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: data.date.length ? true : false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
