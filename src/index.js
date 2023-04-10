import "./style.css";

/* eslint-disable prefer-destructuring */
const locationInput = document.getElementById("location-input");
const searchBtn = document.getElementById("search-btn");
const weatherData = {};
const notFound = document.querySelector(".not-found");
const loading = document.querySelector(".loading");
const weatherContainer = document.querySelector(".weather-container");

function processData(data) {
  weatherData.condition = data.current.condition.text;
  weatherData.iconURL = data.current.condition.icon;
  weatherData.temp = data.current.temp_c;
  weatherData.maxTemp = data.forecast.forecastday[0].day.maxtemp_c;
  weatherData.minTemp = data.forecast.forecastday[0].day.mintemp_c;
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
  const minMaxTemp = document.querySelector(".min-max-temp");
  const rain = document.querySelector(".rain span");
  const humidity = document.querySelector(".humidity span");
  const wind = document.querySelector(".wind span");

  locationInput.value = `${weatherData.city}, ${weatherData.region}, ${weatherData.country}`;
  currentCondition.innerText = weatherData.condition;
  currentIcon.src = weatherData.iconURL;
  currentTemp.innerText = `${Math.round(weatherData.temp)}°C`;
  minMaxTemp.innerText = `${Math.round(weatherData.minTemp)}°C / ${Math.round(
    weatherData.maxTemp
  )}°C`;
  rain.innerText = `${weatherData.rain}%`;
  humidity.innerText = `${weatherData.humidity}%`;
  wind.innerText = `${weatherData.wind} km/h`;
}

async function getLocationWeather(location) {
  try {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=bc1fe65b37574df49cb193851230204&q=${location}&days=1&aqi=no&alerts=no
      `
    );
    const data = await weather.json();
    console.log(data);
    loading.style.display = "none";
    notFound.style.display = "none";
    weatherContainer.style.display = "flex";
    processData(data);
    populateDom();
  } catch (error) {
    console.log(error.message);
    loading.style.display = "none";
    notFound.style.display = "flex";
    weatherContainer.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  if (locationInput.value !== "") {
    loading.style.display = "flex";
    notFound.style.display = "none";
    weatherContainer.style.display = "none";
    getLocationWeather(locationInput.value);
  }
});
