function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
  console.log(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "e39fdf3becea3o599dbd0et40dac045a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormEement = document.querySelector("#search-form");
searchFormEement.addEventListener("submit", handleSearchSubmit);
