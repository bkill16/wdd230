const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption")
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
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}