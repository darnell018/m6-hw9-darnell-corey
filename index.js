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

  var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=8b59d14e29c359a46c0a13a11ea24d86' //builds the url based on user input

  fetch(weatherUrl) //makes request
    .then(function(res) {
      return res.json() // when the response is received, convert to json
    })
    .then(function(res) {
      console.log(res) // when the json is converted, log it
      // our code using the received data MUST happen here inside the .then statement
    }) 
  }
