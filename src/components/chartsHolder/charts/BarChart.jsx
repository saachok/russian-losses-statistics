import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

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
        position: 'relative',
        width: 'inherit',
        height: 'inherit',
        paddingLeft: '1rem',
        paddingRight: '1rem',
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
              display: data.losses[0].label ? true : false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
