/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsaUJBQWlCLElBQUksbUJBQW1CLElBQUksb0JBQW9CO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQsSUFBSTtBQUNKLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDLDBCQUEwQixxQkFBcUI7QUFDL0Msc0JBQXNCLGtCQUFrQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsU0FBUztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24taW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idG5cIik7XG5jb25zdCB1bml0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0LWJ0blwiKTtcbmxldCB1bml0ID0gXCJjXCI7XG5jb25zdCB3ZWF0aGVyRGF0YSA9IHt9O1xuXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gIHdlYXRoZXJEYXRhLmNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgd2VhdGhlckRhdGEuaWNvblVSTCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgd2VhdGhlckRhdGEudGVtcEMgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICB3ZWF0aGVyRGF0YS50ZW1wRiA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIHdlYXRoZXJEYXRhLm1heFRlbXBDID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jO1xuICB3ZWF0aGVyRGF0YS5taW5UZW1wQyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYztcbiAgd2VhdGhlckRhdGEubWF4VGVtcEYgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Y7XG4gIHdlYXRoZXJEYXRhLm1pblRlbXBGID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mO1xuICB3ZWF0aGVyRGF0YS5yYWluID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gIHdlYXRoZXJEYXRhLndpbmQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh3aW5kX2twaDtcbiAgd2VhdGhlckRhdGEuaHVtaWRpdHkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmdodW1pZGl0eTtcbiAgd2VhdGhlckRhdGEuY291bnRyeSA9IGRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgd2VhdGhlckRhdGEucmVnaW9uID0gZGF0YS5sb2NhdGlvbi5yZWdpb247XG4gIHdlYXRoZXJEYXRhLmNpdHkgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURvbSgpIHtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1jb25kaXRpb25cIik7XG4gIGNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWljb25cIik7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXBcIik7XG4gIGNvbnN0IHJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhaW4gc3BhblwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5IHNwYW5cIik7XG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQgc3BhblwiKTtcblxuICBsb2NhdGlvbklucHV0LnZhbHVlID0gYCR7d2VhdGhlckRhdGEuY2l0eX0sICR7d2VhdGhlckRhdGEucmVnaW9ufSwgJHt3ZWF0aGVyRGF0YS5jb3VudHJ5fWA7XG4gIGN1cnJlbnRDb25kaXRpb24uaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEuY29uZGl0aW9uO1xuICBjdXJyZW50SWNvbi51cmwgPSB3ZWF0aGVyRGF0YS5pY29uVVJMLnJlcGxhY2UoXCIvL1wiLCBcIlwiKTtcbiAgaWYgKHVuaXQgPT09IFwiY1wiKSB7XG4gICAgY3VycmVudFRlbXAuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEudGVtcEN9wrBDYDtcbiAgfSBlbHNlIGlmICh1bml0ID09PSBcImZcIikge1xuICAgIGN1cnJlbnRUZW1wLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLnRlbXBGfcKwRmA7XG4gIH1cbiAgcmFpbi5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5yYWlufSVgO1xuICBodW1pZGl0eS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcbiAgd2luZC5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS53aW5kfSBrbS9oYDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25XZWF0aGVyKGxvY2F0aW9uID0gXCJpc3RhbmJ1bFwiKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWJjMWZlNjViMzc1NzRkZjQ5Y2IxOTM4NTEyMzAyMDQmcT0ke2xvY2F0aW9ufSZkYXlzPTEmYXFpPW5vJmFsZXJ0cz1ub1xuICAgICAgYFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXIuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHByb2Nlc3NEYXRhKGRhdGEpO1xuICAgIHBvcHVsYXRlRG9tKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuZ2V0TG9jYXRpb25XZWF0aGVyKCk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAobG9jYXRpb25JbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgIGdldExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbklucHV0LnZhbHVlKTtcbiAgfVxufSk7XG5cbnVuaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHVuaXQgPT09IFwiY1wiKSB1bml0ID0gXCJmXCI7XG4gIGVsc2UgdW5pdCA9IFwiY1wiO1xuICBwb3B1bGF0ZURvbSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=