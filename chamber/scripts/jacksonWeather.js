const currentTemp = document.querySelector("#current-temp");
const captionDesc = document.querySelector("#weather-desc")
const url = "https://api.openweathermap.org/data/2.5/weather";
const queryString = `?lat=43.61&lon=-110.70&units=imperial&appid=0fa0694f89080df75594ebdf2899dd0a`;
const fullUrl = url + queryString;

async function apiFetch() {
    try {
        const response = await fetch(fullUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const temperature = `${Math.round(data.main.temp)}&deg;F`;
    const desc = data.weather[0].description;

    currentTemp.innerHTML = `Weather Today: ${temperature},&nbsp; `;
    captionDesc.textContent = `${desc}`;
}