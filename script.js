let ApiKey = "4dd71b39d23761875ee5740bce4f37aa";
let ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let cityName = document.querySelector(".city");
let temperature = document.querySelector(".temp");
let humid = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon");
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const suggestionsContainer = document.querySelector(".suggestions");

async function checkWeather(city) {
    const response = await fetch(`${ApiUrl}${city}&appid=${ApiKey}`);
    let data = await response.json();
    
    if (response.status === 404) {
        alert("City not found!");
        return;
    }

    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.floor(data.main.temp) + "°C";
    humid.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "mist.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "snow.png";
    }

    console.log(data);
}
searchbtn.addEventListener("click", () => {
        checkWeather(search.value);
        });
