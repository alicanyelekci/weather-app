/* eslint-disable prefer-destructuring */
const locationInput = document.getElementById("location-input");
const searchBtn = document.getElementById("search-btn");
const unitBtn = document.getElementById("unit-btn");
let unit = "c";
const weatherData = {};

function processData(data) {
  weatherData.condition = data.current.condition.text;
  weatherData.iconURL = data.current.condition.icon;
  weatherData.tempC = data.current.temp_c;
  weatherData.tempF = data.current.temp_f;
  weatherData.maxTempC = data.forecast.forecastday[0].day.maxtemp_c;
  weatherData.minTempC = data.forecast.forecastday[0].day.mintemp_c;
  weatherData.maxTempF = data.forecast.forecastday[0].day.maxtemp_f;
  weatherData.minTempF = data.forecast.forecastday[0].day.mintemp_f;
  weatherData.rain = data.forecast.forecastday[0].day.daily_chance_of_rain;
  weatherData.wind = data.forecast.forecastday[0].day.maxwind_kph;
  weatherData.humidity = data.forecast.forecastday[0].day.avghumidity;
  weatherData.country = data.location.country;
  weatherData.region = data.location.region;
  weatherData.city = data.location.name;

  console.log(weatherData);
}

function populateDom() {
  const currentCondition = document.getElementById("current-condition");
  const currentIcon = document.getElementById("current-icon");
  const currentTemp = document.getElementById("current-temp");
  const rain = document.querySelector(".rain span");
  const humidity = document.querySelector(".humidity span");
  const wind = document.querySelector(".wind span");

  locationInput.value = `${weatherData.city}, ${weatherData.region}, ${weatherData.country}`;
  currentCondition.innerText = weatherData.condition;
  currentIcon.url = weatherData.iconURL.replace("//", "");
  if (unit === "c") {
    currentTemp.innerText = `${weatherData.tempC}°C`;
  } else if (unit === "f") {
    currentTemp.innerText = `${weatherData.tempF}°F`;
  }
  rain.innerText = `${weatherData.rain}%`;
  humidity.innerText = `${weatherData.humidity}%`;
  wind.innerText = `${weatherData.wind} km/h`;
}

async function getLocationWeather(location = "istanbul") {
  try {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=bc1fe65b37574df49cb193851230204&q=${location}&days=1&aqi=no&alerts=no
      `
    );
    const data = await weather.json();
    console.log(data);
    processData(data);
    populateDom();
  } catch (error) {
    console.log(error.message);
  }
}

getLocationWeather();

searchBtn.addEventListener("click", () => {
  if (locationInput.value !== "") {
    getLocationWeather(locationInput.value);
  }
});

unitBtn.addEventListener("click", () => {
  if (unit === "c") unit = "f";
  else unit = "c";
  populateDom();
});
