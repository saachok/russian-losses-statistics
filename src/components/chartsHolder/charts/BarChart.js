import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  const datasets = data.losses.map((elem) => {
    return {
      label: elem.label,
      data: elem.data,
      backgroundColor: elem.backgroundColor,
      borderColor: elem.borderColor,
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
