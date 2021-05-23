import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import getWakatimeData from '../data/getWakatimeData';
import convertToDecimalTime from '../utils/convertToDecimalTime';
import generateLastThirtyDays from '../utils/generateLastThirtyDays';

export default function HoursChartJs() {
  // Find daily average coding time
  function findDailyAverage(distribution) {
    const total = distribution.reduce((accum, val) => accum + val);
    const avg = total / distribution.length;
    return distribution.map((x) => avg);
  }

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Get monthly coding time and update chart state
  const [chartData, setChartData] = useState({
    labels: generateLastThirtyDays(),
  });

  function getHours() {
    getWakatimeData('summaries?range=last_30_days').then(function (info) {
      let allInfo = info.data;
      let decimalHours = allInfo
        .map((x) => [x.grand_total.hours, x.grand_total.minutes])
        .map((x) => convertToDecimalTime(...x));

      setChartData({
        datasets: [
          {
            label: 'Hours',
            data: decimalHours,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
          {
            type: 'line',
            label: 'Average',
            backgroundColor: 'rgba(54, 117, 235, 0.4)',
            borderColor: 'rgba(54, 117, 235, 0)',
            data: findDailyAverage(decimalHours),
          },
        ],
      });
    });
  }

  // Retrieve data asynchronously from the WakaTime API
  useEffect(() => {
    getHours();
  }, []);

  return (
    <Bar data={chartData} options={options} style={{ paddingTop: '1rem' }} />
  );
}
