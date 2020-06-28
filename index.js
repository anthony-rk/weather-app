const apiKey = 'e403aee2404f8ccd850fb30fa2b1ef02';
// URL (required), options (optional)
const getWeatherData = (city, apiKey) => {
  const weatherGeneralDiv = document.getElementById('weatherGeneral');
  const weatherTempDiv = document.getElementById('weatherTemp');

  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apiKey, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // console.log(response);
    // console.log(response.weather[0].description);
    // console.log('Temp in Celcius is: ' + Math.round(kelvinToCelcius(response.main.temp))); 
    // console.log('Temp in Fahrenheit is: ' + Math.round(kelvinToFahrenheit(response.main.temp))); 
    weatherGeneralDiv.innerHTML = response.weather[0].description;
    weatherTempDiv.innerHTML = Math.round(kelvinToFahrenheit(response.main.temp));
  });
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


// Run this on Form Submission, either do Fahrenheit or Celcius depending on Button
getWeatherData('Ann Arbor', apiKey);

