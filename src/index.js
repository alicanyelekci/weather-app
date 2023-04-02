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
