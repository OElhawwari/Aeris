
// Variables :

// Date Variables :
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// API Key :
let apiKey = "0fb537e39c17459babd145505240412";


// Days Container :

// currentDay :
let currentDay = document.querySelectorAll('#currentDay');
let current_temperature = document.querySelector('#currentDay .temperature');
let current_weatherStatus = document.querySelector('#currentDay .status');
let current_city = document.querySelector('#currentDay .city');
let current_country = document.querySelector('#currentDay .country');
let current_day = document.querySelector('#currentDay .day');
let current_time = document.querySelector('#currentDay .time');
let current_weatherStatusIcon = document.querySelector('#currentDay .weatherStatusIcon');
let current_windSpeed = document.querySelector('#currentDay .windSpeed span');
let current_windDirection = document.querySelector('#currentDay .windDirection span');
let current_fallDetection = document.querySelector('#currentDay .fallDetection span');

// nextDay :
let nextDay = document.querySelectorAll('#nextDay');
let next_temperature = document.querySelector('#nextDay .temperature');
let next_weatherStatus = document.querySelector('#nextDay .status');
let next_city = document.querySelector('#nextDay .city');
let next_country = document.querySelector('#nextDay .country');
let next_day = document.querySelector('#nextDay .day');
let next_weatherStatusIcon = document.querySelector('#nextDay .weatherStatusIcon');
let next_windSpeed = document.querySelector('#nextDay .windSpeed span');
let next_windDirection = document.querySelector('#nextDay .windDirection span');
let next_fallDetection = document.querySelector('#nextDay .fallDetection span');


// nextNextDay :
let nextNextDay = document.querySelectorAll('#nextNextDay')
let nextNext_temperature = document.querySelector('#nextNextDay .temperature');
let nextNext_weatherStatus = document.querySelector('#nextNextDay .status');
let nextNext_city = document.querySelector('#nextNextDay .city');
let nextNext_country = document.querySelector('#nextNextDay .country');
let nextNext_day = document.querySelector('#nextNextDay .day');
let nextNext_weatherStatusIcon = document.querySelector('#nextNextDay .weatherStatusIcon');
let nextNext_windSpeed = document.querySelector('#nextNextDay .windSpeed span');
let nextNext_windDirection = document.querySelector('#nextNextDay .windDirection span');
let nextNext_fallDetection = document.querySelector('#nextNextDay .fallDetection span');




let carouselTextPrev = document.querySelector('.carouselTextPrev');
let carouselTextNext = document.querySelector('.carouselTextNext');


async function getWeatherData(query) {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=3`);

    if (response.ok && response.status != 400) {
        let query = await response.json();
        displayCurrent(query.location, query.forecast.forecastday, query.current);
        displayNext(query.location, query.forecast.forecastday, query.current);
        displayNextNext(query.location, query.forecast.forecastday, query.current);
    }
}

document.getElementById("searchInput").addEventListener("keyup", a => {
    getWeatherData(a.target.value);
}
);

function displayCurrent(location, daysArr, current) {
    if (current != null) {
        let date = new Date(current.last_updated.replace(" ", "T"));
        let time = new Date(location.localtime);
        current_temperature.innerHTML = `${current.temp_c}<sup>o</sup>C`;
        current_weatherStatus.innerHTML = `${current.condition.text}`;
        current_country.innerHTML = `${location.country}`;
        current_city.innerHTML = `${location.name}`;
        current_day.innerHTML = `${days[date.getDay()]} - ${date.getDate()}  ${months[date.getMonth()]}, ${date.getFullYear()}`;
        current_time.innerHTML = `Local Time: ${time.getHours()}:${time.getMinutes()}`
        current_weatherStatusIcon.innerHTML = `<img src="https:${current.condition.icon}" alt="">`
        current_windSpeed.innerHTML = `${current.wind_kph} km/h `;
        current_windDirection.innerHTML = `${current.wind_dir} `;
        current_fallDetection.innerHTML = `${daysArr[0].day.daily_chance_of_rain} %`;

        if (current.is_day == 1) {
            document.getElementsByClassName("main-container-fluid")[0].style.background = "radial-gradient(circle at top left, var(--day-bg-lighter-clr), var(--day-bg-clr))";
            document.querySelector(".overlayDay").style.opacity = ".25";
            document.querySelector(".overlayNight").style.opacity = "0";
        } else {
            document.getElementsByClassName("main-container-fluid")[0].style.background = "radial-gradient(circle at top left, var(--night-bg-light-clr), var(--night-bg-clr))";
            document.querySelector(".overlayDay").style.opacity = "0";
            document.querySelector(".overlayNight").style.opacity = ".1";

        }

    }
}

function displayNext(loc, daysArr, current) {
    let date = new Date(current.last_updated.replace(" ", "T"));
    next_temperature.innerHTML = `${daysArr[1].day.maxtemp_c}<sup>o</sup>C`;
    next_weatherStatus.innerHTML = `${daysArr[1].day.condition.text}`;
    next_country.innerHTML = `${loc.country}`;
    next_city.innerHTML = `${loc.name}`;
    next_day.innerHTML = `${days[new Date(daysArr[1].date.replace(" ", "T")).getDay()]} - ${date.getDate() + 1}  ${months[date.getMonth()]}, ${date.getFullYear()}`;
    next_weatherStatusIcon.innerHTML = `<img src="https:${daysArr[1].day.condition.icon}" alt="" >`
    next_windSpeed.innerHTML = `${daysArr[1].day.maxwind_kph} km/h `;
    next_windDirection.innerHTML = `N/A`;
    next_fallDetection.innerHTML = `${daysArr[1].day.daily_chance_of_rain} %`;
}

function displayNextNext(loc, daysArr, current) {
    let date = new Date(current.last_updated.replace(" ", "T"));
    nextNext_temperature.innerHTML = `${daysArr[2].day.maxtemp_c}<sup>o</sup>C`;
    nextNext_weatherStatus.innerHTML = `${daysArr[2].day.condition.text}`;
    nextNext_country.innerHTML = `${loc.country}`;
    nextNext_city.innerHTML = `${loc.name}`;
    nextNext_day.innerHTML = `${days[new Date(daysArr[2].date.replace(" ", "T")).getDay()]} - ${date.getDate() + 2}  ${months[date.getMonth()]}, ${date.getFullYear()}`;
    nextNext_weatherStatusIcon.innerHTML = `<img src="https:${daysArr[2].day.condition.icon}" alt="" >`
    nextNext_windSpeed.innerHTML = `${daysArr[2].day.maxwind_kph} km/h `;
    nextNext_windDirection.innerHTML = `N/A`;
    nextNext_fallDetection.innerHTML = `${daysArr[2].day.daily_chance_of_rain} %`;
}

getWeatherData("cairo");
