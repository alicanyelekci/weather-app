/* eslint-disable prefer-destructuring */
const locationInput = document.getElementById("location-input");
const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("location-form");
const unitBtn = document.getElementById("unit-btn");
let unit = "c";
const weatherData = {
  current: {},
  forecast: { 0: {}, 1: {}, 2: {} },
  location: {},
};

function processData(data) {
  weatherData.current.condition = data.current.condition.text;
  weatherData.current.iconURL = data.current.condition.icon;
  weatherData.current.tempC = data.current.temp_c;
  weatherData.current.tempF = data.current.temp_f;
  weatherData.current.tempFeelC = data.current.feelslike_c;
  weatherData.current.tempFeelF = data.current.feelslike_f;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    weatherData.forecast[i].condition =
      data.forecast.forecastday[i].day.condition.text;
    weatherData.forecast[i].icon =
      data.forecast.forecastday[i].day.condition.icon;
    weatherData.forecast[i].maxTempC =
      data.forecast.forecastday[i].day.maxtemp_c;
    weatherData.forecast[i].minTempC =
      data.forecast.forecastday[i].day.mintemp_c;
    weatherData.forecast[i].maxTempF =
      data.forecast.forecastday[i].day.maxtemp_f;
    weatherData.forecast[i].minTempF =
      data.forecast.forecastday[i].day.mintemp_f;
  }

  weatherData.location.country = data.location.country;
  weatherData.location.region = data.location.region;
  weatherData.location.name = data.location.name;
}

function populateDom() {
  const location = document.getElementById("location");
  const currentCondition = document.getElementById("current-condition");
  const currentIcon = document.getElementById("current-icon");
  const currentTemp = document.getElementById("current-temp");
  const currentTempFeel = document.getElementById("current-temp-feel");

  location.innerText = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
  currentCondition.innerText = weatherData.current.condition;
  currentIcon.url = weatherData.current.iconURL.replace("//", "");
  if (unit === "c") {
    currentTemp.innerText = `${weatherData.current.tempC}°C`;
    currentTempFeel.innerText = `Feels like ${weatherData.current.tempFeelC}°C`;
  } else if (unit === "f") {
    currentTemp.innerText = `${weatherData.current.tempF}°F`;
    currentTempFeel.innerText = `Feels like ${weatherData.current.tempFeelF}°F`;
  }
}

async function getLocationWeather(location = "istanbul") {
  try {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=bc1fe65b37574df49cb193851230204&q=${location}&days=3&aqi=no&alerts=no
      `
    );
    const data = await weather.json();
    processData(data);
    populateDom();
  } catch (error) {
    console.log(error.message);
  }
}

getLocationWeather();

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (locationInput.value !== "") {
    getLocationWeather(locationInput.value);
    form.reset();
  }
});

unitBtn.addEventListener("click", () => {
  if (unit === "c") unit = "f";
  else unit = "c";
  populateDom();
});
