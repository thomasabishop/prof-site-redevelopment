import React from 'react';
import { Line } from 'react-chartjs-2';

export default function AlgorithmDistributionChart(props) {
  const style = {
    margin: '2rem 0',
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
  return <Line data={props.data} options={options} style={style} />;
}
