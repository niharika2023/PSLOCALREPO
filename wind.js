const cityName = 'London';
const key = '04d34bd6395feacde72863bb2da2fc4b';

const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Key}`;

console.log('Fetching data from API:', apiUrl);

fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {

    if (data.wind && data.wind.speed !== undefined) {
      const windSpeed = data.wind.speed;
      console.log(`Current wind speed in ${cityName}: ${windSpeed} m/s`);
    } else {
      console.log('Wind information not available in the response.');
    }

  })
  .catch(error => {
    console.error('There was a problem fetching data:', error.message);
  });




 