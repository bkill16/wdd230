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
      const forecastsByDate = {};

      data.list.forEach((forecast) => {
        const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        if (futureDates.includes(date)) {
          if (!forecastsByDate[date]) {
            forecastsByDate[date] = { high: -Infinity, low: Infinity, forecasts: [] };
          }

          forecastsByDate[date].forecasts.push({
            temperature: forecast.main.temp,
            icon: forecast.weather[0].icon,
          });

          forecastsByDate[date].high = Math.max(forecastsByDate[date].high, forecast.main.temp);
          forecastsByDate[date].low = Math.min(forecastsByDate[date].low, forecast.main.temp);
        }
      });

      forecastContainer.innerHTML = '';

      Object.entries(forecastsByDate).forEach(([date, { high, low, forecasts }]) => {
        const forecastEl = document.createElement('div');

        forecastEl.innerHTML = `
          <p>${date}</p>
          <img src="http://openweathermap.org/img/w/${forecasts[0].icon}.png" alt="Weather Icon">
          <p>High: ${Math.round(high)}°F</p>
          <p>Low: ${Math.round(low)}°F</p>
        `;

        forecastContainer.appendChild(forecastEl);
      });
    });
}

fetchForecast();

setInterval(fetchForecast, 24 * 60 * 60 * 1000);