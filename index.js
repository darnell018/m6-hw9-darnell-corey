//Api Key = 8b59d14e29c359a46c0a13a11ea24d86')


//defines the form
var weatherForm = document.querySelector('main form');


//looks for form submission, cancels the reload & grabs the value
weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  var cityName = document.getElementsByTagName("input")[0].value; console.log(cityName);

  if (cityName) {
    getWeather();
  } 
});


function getWeather() {
  var cityName = document.getElementsByTagName("input")[0].value; //defines cityName for the url

  var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=8b59d14e29c359a46c0a13a11ea24d86' //builds the url based on user input

  fetch(weatherUrl) //makes request
    .then(function(res) {
      return res.json() // when the response is received, convert to json
    })
    .then(function(res) {
      console.log(res) // when the json is converted, log it
      // our code using the received data MUST happen here inside the .then statement
      displayWeather(res)
    });
  }

  /*
    Name of the Searched City with Country Code
    Description of current weather
    Icon image for current weather conditions
    Current Temperature
    Current "feels like" Temperature
  */

function displayWeather(res) {
  //pulling the needed weather data
  var theCity = res.name +', '+ res.sys.country;
  var theCondtions = res.weather[0].description;
  var weatherIconUrl = 'https://openweathermap.org/img/wn/' + res.weather[0].icon + '@2x.png'
  var theWeatherIcon = weatherIconUrl;
  var currentTemp = Math.round(res.main.temp);
  var feelsLikeTemp = Math.round(res.main.feels_like);

  var weatherDiv = document.getElementById('weather'); //gets the div already in the HTML
  var data = document.createElement("li");
  data.classList.add("city");
  var weatherData = `
    <h2 class="city">${theCity}</h2>

    <figure>
      <img class="icon" src=${theWeatherIcon}>
      <figcaption>${theCondtions}</figcaption>
    </figure>

    <p class="temps">Currently: ${currentTemp}<sup>°F</sup></p>
    <p class="temps">Feels Like: ${feelsLikeTemp}<sup>°F</sup></p>
  `;
  data.innerHTML = weatherData;
  weatherDiv.appendChild(data);

}
