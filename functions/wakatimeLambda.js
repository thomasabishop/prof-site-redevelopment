const key = process.env.WAKATIME_TOKEN;
const fetch = require('node-fetch');
const btoa = require('btoa');

exports.handler = async function (event) {
  try {
    const { endpoint } = event.queryStringParameters;
    const wakatimeRequest = `https://wakatime.com/api/v1/users/current/${endpoint}`;
    let wakatimeData = await fetch(wakatimeRequest, {
      headers: {
        authorization: `Basic ${btoa(key)}`,
      },
      method: 'GET',
    });
    let data = await wakatimeData.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
  }
};
