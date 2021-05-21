const fetch = require('node-fetch');
//const apiKey = process.env.0ce7d1ce-2b18-4fe3-934c-aa8977475c10;

exports.handler = function(endpoint) {
const rootEndpoint = `https://wakatime.com/api/v1/users/current/${endpoint}`;
  try {
    let response = await fetch(rootEndpoint, {
      headers: {
        authorization: `Basic ${btoa(apiKey)}`,
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
} 