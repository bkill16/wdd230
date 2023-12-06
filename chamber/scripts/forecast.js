// Select forecast container
const forecastContainer = document.getElementById('forecastContainer');

// OpenWeatherMap API Key
const API_KEY = '0fa0694f89080df75594ebdf2899dd0a';

// API URL
const fullurl = `https://api.openweathermap.org/data/2.5/forecast?lat=43.61&lon=-110.70&units=imperial&appid=${API_KEY}`;

// Get forecast data
fetch(fullurl)
  .then((response) => response.json())
  .then((data) => {
    // Extract unique dates for the next 3 days
    const uniqueDates = [];
    const uniqueForecasts = data.list.filter((forecast) => {
      const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      });

      if (!uniqueDates.includes(date) && uniqueDates.length < 3) {
        uniqueDates.push(date);
        return true;
      }

      return false;
    });

    // Display each forecast
    uniqueForecasts.forEach((forecast) => {
      // Create forecast element
      const forecastEl = document.createElement('div');

      // Format date
      const formattedDate = new Date(forecast.dt_txt).toLocaleDateString(
        'en-US',
        {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }
      );

      // Add forecast data
      forecastEl.innerHTML = `
      <p>${formattedDate}</p>
      <img src="http://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="Weather Icon">
      <p>${forecast.main.temp}°F</p>
    `;

      // Append forecast to container
      forecastContainer.appendChild(forecastEl);
    });
  });
