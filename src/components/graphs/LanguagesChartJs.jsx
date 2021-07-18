import React, {useState, useEffect} from 'react';
import Spinner from '../../components/Spinner';
import {Doughnut} from 'react-chartjs-2';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
`;

export default function LanguagesChartJs() {
  // Toggle spinner during fetch request to external API
  const [isLoading, setIsLoading] = useState(true);

  // Get programming language usage percentags from API, update chart state
  const [chartData, setChartData] = useState();

  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
    aspectRatio: 3,
    responsive: true,
  };

  const filterOutLangs = ['Sketch Drawing', 'Image (png)', 'Text', 'Git Config', 'Other', 'INI'];

  function getLanguages() {
    fetch('/.netlify/functions/wakatimeLambda?endpoint=stats/last_30_days')
      .then((resp) => resp.json())
      .then(function (info) {
        let allInfo = info.data;
        let languagePercentages = {};
        allInfo.languages.forEach((language) => {
          if (!filterOutLangs.includes(language.name)) {
            if (language.name === 'JSX') {
              language.name = 'React.js';
            }
            languagePercentages[language.name] = language.percent;
          }
        });

        setChartData({
          //labels: langs,
          labels: Object.keys(languagePercentages),
          datasets: [
            {
              label: 'Time as %',
              data: Object.values(languagePercentages),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });

        // Remove spinner once data is returned
        setIsLoading(false);
      });
  }

  // Retrieve data asynchronously from the WakaTime API
  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <Wrapper>{isLoading ? <Spinner /> : <Doughnut data={chartData} options={options} />}</Wrapper>
  );
}
