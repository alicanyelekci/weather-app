/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function getLocationWeather(location = "istanbul") {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=bc1fe65b37574df49cb193851230204&q=${location}`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

getLocationWeather("london");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSx3RkFBd0YsU0FBUztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0TG9jYXRpb25XZWF0aGVyKGxvY2F0aW9uID0gXCJpc3RhbmJ1bFwiKSB7XG4gIGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWJjMWZlNjViMzc1NzRkZjQ5Y2IxOTM4NTEyMzAyMDQmcT0ke2xvY2F0aW9ufWBcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xufVxuXG5nZXRMb2NhdGlvbldlYXRoZXIoXCJsb25kb25cIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=