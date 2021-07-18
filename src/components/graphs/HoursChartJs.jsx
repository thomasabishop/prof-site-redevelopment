import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import Spinner from '../../components/Spinner';
import convertToDecimalTime from '../../utils/convertToDecimalTime';
import generateLastThirtyDays from '../../utils/generateLastThirtyDays';

export default function HoursChartJs() {
  // Toggle spinner during fetch request to external API
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Get monthly coding durations from API, update chart state
  const [chartData, setChartData] = useState({
    labels: generateLastThirtyDays(),
  });

  function getHours() {
    fetch('/.netlify/functions/wakatimeLambda?endpoint=summaries?range=last_30_days')
      .then((resp) => resp.json())
      .then(function (info) {
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
          ],
        });
      });
  }

  // Retrieve data asynchronously from the WakaTime API
  useEffect(() => {
    // Remove spinner once data is returned
    setIsLoading(false);
    getHours();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Bar data={chartData} options={options} style={{paddingTop: '1rem'}} />
      )}
    </div>
  );
}
