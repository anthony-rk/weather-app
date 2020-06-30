const apiKey = 'e403aee2404f8ccd850fb30fa2b1ef02';

// Global Weather Object
const currentTemp = {
  city: 'Ann Arbor',
  tempType: 'fahrenheit'
}

// URL (required), options (optional)
const getWeatherData = (city, apiKey, tempType) => {
  const weatherGeneralDiv = document.getElementById('weatherGeneral');
  const weatherTempDiv = document.getElementById('weatherTemp');

  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apiKey, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // Display weather type
    weatherGeneralDiv.innerHTML = "Weather: " +  response.weather[0].description;

    // Display weather temperature, in C or F
    if (tempType == 'fahrenheit') {
      weatherTempDiv.innerHTML = "Temperature (°F): " + Math.round(kelvinToFahrenheit(response.main.temp)) + '°';
    } else {
      weatherTempDiv.innerHTML = "Temperature (°C): " + Math.round(kelvinToCelcius(response.main.temp)) + '°';
    }
  });
};

const runWeatherUpdate = () => {
  currentTemp.city = document.getElementById("city-name").value;
  console.log(currentTemp);
  getWeatherData(currentTemp.city, apiKey, currentTemp.tempType);
};

// Conversions from Kelvin to C or F
const kelvinToCelcius = (kelvinTemp) => {
    let celciusTemp = kelvinTemp - 273.15;
    return celciusTemp;
};

const kelvinToFahrenheit = (kelvinTemp) => {
    let fahrenheitTemp = kelvinTemp * (9/5) - 459.67;
    return fahrenheitTemp;
};

const setTempToCelsius = () => {
  currentTemp.tempType = 'celcius';
  console.log("setTempToCelcius() fn clicked");
  runWeatherUpdate();
};

const setTempToFahrenheit = () => {
  currentTemp.tempType = 'fahrenheit';
  console.log("setTempToFahrenheit() fn clicked");
  runWeatherUpdate();
};

runWeatherUpdate();


