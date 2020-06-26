const city = prompt("What city do you want to see the Weather for?");


// URL (required), options (optional)
fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=e403aee2404f8ccd850fb30fa2b1ef02', {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response);
  console.log(response.weather[0].description);
  console.log('Temp in Celcius is: ' + Math.round(kelvinToCelcius(response.main.temp))); 
  console.log('Temp in Fahrenheit is: ' + Math.round(kelvinToFahrenheit(response.main.temp))); 
});

// Conversions from Kelvin to C or F
const kelvinToCelcius = (kelvinTemp) => {
    let celciusTemp = kelvinTemp - 273.15;
    return celciusTemp;
};

const kelvinToFahrenheit = (kelvinTemp) => {
    let fahrenheitTemp = kelvinTemp * (9/5) - 459.67;
    return fahrenheitTemp;
};