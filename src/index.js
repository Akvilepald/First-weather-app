//In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
console.log(now);
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDay[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let time = `${hour}:${minutes}`;
let currentDateTime = `${day} ${time}`;
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septembet", "October", "November", "December"];
let month = months[now.getMonth()];
let date = now.getDate();
let dateElement = document.querySelector("#now")
 dateElement.innerHTML = `${time} ${day}, ${date} ${month}`;

//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

let citySearch = document.querySelector("input");
let cityName = document.querySelector(".city");
let description = document.querySelector("#description");
let temp = document.querySelector("#degrees-celsius");

function displayCity(event) {
event.preventDefault();
let apiKey = "175ad63a7fc75a67f734a3105255cb29";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=${apiKey}&units=metric`;
    function showTemperature(response) {
    console.log(response.data.main.temp);
    console.log(response.data.name);
    console.log();
    console.log(apiUrl);
    temp.innerHTML = `${Math.round(response.data.main.temp)}°C`
    cityName.innerHTML = `${response.data.name}`;
    description.innerHTML = `${response.data.weather[0].main}`
  }
axios.get(apiUrl).then(showTemperature);
}

let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", displayCity);


function showFahrenheit(event) {
  event.preventDefault();
  let celsius = 9;
  let fahrenheit = Math.round(celsius*1.8+32);
  console.log(fahrenheit);
 
  temp.innerHTML = `${fahrenheit}°F`;
  let unitOptions = document.querySelector("#fahrenheit");
  unitOptions.innerHTML = `Show in Celsius`; 
}
let changeUnit = document.querySelector("#fahrenheit");
changeUnit.addEventListener("click", showFahrenheit);


//On your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.













