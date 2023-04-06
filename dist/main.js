/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGNBQWMsS0FBSyxPQUFPLFNBQVM7QUFDbkMsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiwwQkFBMEIsSUFBSSw0QkFBNEIsSUFBSSw2QkFBNkI7QUFDckg7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RCw4Q0FBOEMsOEJBQThCO0FBQzVFLElBQUk7QUFDSiwrQkFBK0IsMEJBQTBCO0FBQ3pELDhDQUE4Qyw4QkFBOEI7QUFDNUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsU0FBUztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1pbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ0blwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uLWZvcm1cIik7XG5jb25zdCB1bml0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0LWJ0blwiKTtcbmxldCB1bml0ID0gXCJjXCI7XG5jb25zdCB3ZWF0aGVyRGF0YSA9IHtcbiAgY3VycmVudDoge30sXG4gIGZvcmVjYXN0OiB7IDA6IHt9LCAxOiB7fSwgMjoge30gfSxcbiAgbG9jYXRpb246IHt9LFxufTtcblxuZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSkge1xuICB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgd2VhdGhlckRhdGEuY3VycmVudC5pY29uVVJMID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBDID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wRiA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcEZlZWxDID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBGZWVsRiA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdFtpXS5jb25kaXRpb24gPVxuICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3RbaV0uaWNvbiA9XG4gICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdFtpXS5tYXhUZW1wQyA9XG4gICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2M7XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3RbaV0ubWluVGVtcEMgPVxuICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9jO1xuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0W2ldLm1heFRlbXBGID1cbiAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZjtcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdFtpXS5taW5UZW1wRiA9XG4gICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2Y7XG4gIH1cblxuICB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5ID0gZGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb24gPSBkYXRhLmxvY2F0aW9uLnJlZ2lvbjtcbiAgd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSA9IGRhdGEubG9jYXRpb24ubmFtZTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVEb20oKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1jb25kaXRpb25cIik7XG4gIGNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWljb25cIik7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXBcIik7XG4gIGNvbnN0IGN1cnJlbnRUZW1wRmVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10ZW1wLWZlZWxcIik7XG5cbiAgbG9jYXRpb24uaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0sICR7d2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9ufSwgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gIGN1cnJlbnRDb25kaXRpb24uaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb247XG4gIGN1cnJlbnRJY29uLnVybCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuaWNvblVSTC5yZXBsYWNlKFwiLy9cIiwgXCJcIik7XG4gIGlmICh1bml0ID09PSBcImNcIikge1xuICAgIGN1cnJlbnRUZW1wLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcEN9wrBDYDtcbiAgICBjdXJyZW50VGVtcEZlZWwuaW5uZXJUZXh0ID0gYEZlZWxzIGxpa2UgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBGZWVsQ33CsENgO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09IFwiZlwiKSB7XG4gICAgY3VycmVudFRlbXAuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wRn3CsEZgO1xuICAgIGN1cnJlbnRUZW1wRmVlbC5pbm5lclRleHQgPSBgRmVlbHMgbGlrZSAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcEZlZWxGfcKwRmA7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25XZWF0aGVyKGxvY2F0aW9uID0gXCJpc3RhbmJ1bFwiKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWJjMWZlNjViMzc1NzRkZjQ5Y2IxOTM4NTEyMzAyMDQmcT0ke2xvY2F0aW9ufSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub1xuICAgICAgYFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXIuanNvbigpO1xuICAgIHByb2Nlc3NEYXRhKGRhdGEpO1xuICAgIHBvcHVsYXRlRG9tKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuZ2V0TG9jYXRpb25XZWF0aGVyKCk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAobG9jYXRpb25JbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgIGdldExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbklucHV0LnZhbHVlKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH1cbn0pO1xuXG51bml0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmICh1bml0ID09PSBcImNcIikgdW5pdCA9IFwiZlwiO1xuICBlbHNlIHVuaXQgPSBcImNcIjtcbiAgcG9wdWxhdGVEb20oKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9