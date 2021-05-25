import React from 'react';
import { Line } from 'react-chartjs-2';

export default function AlgorithmDistributionChart() {
  const style = {
    margin: '2rem 0',
  };
  const data = {
    labels: ['2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'O(n^2)',
        data: [2, 3, 4, 5, 6],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: 'n',
        },
      },
    },
  };
  return <Line data={data} options={options} style={style} />;
}
