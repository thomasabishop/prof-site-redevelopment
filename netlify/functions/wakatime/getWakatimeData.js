const fetch = require('node-fetch');
const wakatimeApiKey = process.env.WAKATIME_TOKEN;

exports.handler = async function (event) {
  const { resource } = event.queryStringParameters;
  const endpoint = `https://wakatime.com/api/v1/users/current/summaries?range=last_30_days`;
  try {
    let response = await fetch(endpoint, {
      headers: {
        authorization: `Basic ${btoa(wakatimeApiKey)}`,
      },
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error. Status = ${response.status}`);
    } else {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
