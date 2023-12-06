const forecastContainer = document.getElementById('forecastContainer');
const API_KEY = '0fa0694f89080df75594ebdf2899dd0a';
const dateToday = new Date();

const futureDates = Array.from({ length: 3 }, (_, index) => {
  const nextDate = new Date(dateToday.getTime() + (index + 1) * 24 * 60 * 60 * 1000);
  return nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
});

function fetchForecast() {
  const fullurl = `https://api.openweathermap.org/data/2.5/forecast?lat=43.61&lon=-110.70&units=imperial&appid=${API_KEY}`;

  fetch(fullurl)
    .then((response) => response.json())
    .then((data) => {
      const uniqueForecasts = [];
      data.list.forEach((forecast) => {
        const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        if (futureDates.includes(date) && !uniqueForecasts.some((entry) => entry.date === date)) {
          uniqueForecasts.push({
            date,
            temperature: forecast.main.temp,
            icon: forecast.weather[0].icon,
          });
        }
      });

      forecastContainer.innerHTML = '';

      uniqueForecasts.forEach((forecast) => {
        const forecastEl = document.createElement('div');

        forecastEl.innerHTML = `
          <p>${forecast.date}</p>
          <img src="http://openweathermap.org/img/w/${forecast.icon}.png" alt="Weather Icon">
          <p>${forecast.temperature}°F</p>
        `;

        forecastContainer.appendChild(forecastEl);
      });
    });
}

fetchForecast();

setInterval(fetchForecast, 24 * 60 * 60 * 1000);