export default async function getWakatimeData(endpoint) {
  const wakaToken = '0ce7d1ce-2b18-4fe3-934c-aa8977475c10';
  const rootEndpoint = `https://cors-anywhere.herokuapp.com/https://wakatime.com/api/v1/users/current/${endpoint}`;
  try {
    let response = await fetch(rootEndpoint, {
      headers: {
        authorization: `Basic ${btoa(wakaToken)}`,
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
