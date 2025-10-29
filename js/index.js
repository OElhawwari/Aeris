
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// API key is now kept on the server (Vercel) via WEATHER_API_KEY

const current_temperature = document.querySelector(".current-weather-card .temperature")
const current_weatherStatus = document.querySelector(".current-weather-card .status")
const current_city = document.querySelector(".current-weather-card .city")
const current_country = document.querySelector(".current-weather-card .country")
const current_day = document.querySelector(".current-weather-card .day")
const current_time = document.querySelector(".current-weather-card .time")
const current_weatherStatusIcon = document.querySelector(".current-weather-card .weatherStatusIcon")
const current_windSpeed = document.querySelector(".weather-details-grid .wind-card .detail-value")
const current_windDirection = document.querySelector(".weather-details-grid .direction-card .detail-value")
const current_fallDetection = document.querySelector(".weather-details-grid .precipitation-card .detail-value")

const forecast_cards = document.querySelectorAll(".forecast-card")

function showLoader() {
  const loader = document.getElementById("appLoader")
  if (loader) {
    loader.classList.remove("hidden")
    document.body.setAttribute("aria-busy", "true")
  }
}

function hideLoader() {
  const loader = document.getElementById("appLoader")
  if (loader) {
    loader.classList.add("hidden")
    document.body.removeAttribute("aria-busy")
  }
}

async function getWeatherData(query) {
  try {
    showLoader()
    
    const response = await fetch(`/api/forecast?q=${encodeURIComponent(query)}&days=3`)

    if (response.ok && response.status != 400) {
      const data = await response.json()
      displayCurrent(data.location, data.forecast.forecastday, data.current)
      displayForecast(data.location, data.forecast.forecastday, data.current)
      updateBackgroundMode(data.current.is_day)
    }
  } catch (e) {
    console.error("Error fetching weather data:", e)
  } finally {
    hideLoader()
  }
}

document.getElementById("searchInput").addEventListener("keyup", (a) => {
  if (a.target.value.trim()) {
    getWeatherData(a.target.value)
  }
})

function displayCurrent(location, daysArr, current) {
  if (current != null) {
    const date = new Date(current.last_updated.replace(" ", "T"))
    const time = new Date(location.localtime)

    current_temperature.innerHTML = `${current.temp_c}<sup>o</sup>C`
    current_weatherStatus.innerHTML = `${current.condition.text}`
    current_country.innerHTML = `${location.country}`
    current_city.innerHTML = `${location.name}`
    current_day.innerHTML = `${days[date.getDay()]} - ${date.getDate()}  ${months[date.getMonth()]}, ${date.getFullYear()}`
    current_time.innerHTML = `Local Time: ${time.getHours()}:${String(time.getMinutes()).padStart(2, "0")}`
    current_weatherStatusIcon.innerHTML = `<img src="https:${current.condition.icon}" alt="Weather icon">`
    current_windSpeed.innerHTML = `${current.wind_kph} km/h`
    current_windDirection.innerHTML = `${current.wind_dir}`
    current_fallDetection.innerHTML = `${daysArr[0].day.daily_chance_of_rain}%`
  }
}

function displayForecast(location, daysArr, current) {
  daysArr.forEach((day, index) => {
    if (index < 3 && forecast_cards[index]) {
      const card = forecast_cards[index]
      const date = new Date(day.date.replace(" ", "T"))

      card.querySelector(".forecast-day").innerHTML = days[date.getDay()]
      card.querySelector(".forecast-date").innerHTML = `${date.getDate()} ${months[date.getMonth()]}`
      card.querySelector(".forecast-icon").innerHTML =
        `<div class="weatherStatusIcon"><img src="https:${day.day.condition.icon}" alt="Weather icon"></div>`
      card.querySelector(".forecast-temp").innerHTML = `${day.day.maxtemp_c}<sup>o</sup>C`
      card.querySelector(".forecast-status").innerHTML = day.day.condition.text

      const detailsDiv = card.querySelector(".forecast-details")
      detailsDiv.innerHTML = `
                <span>Wind: ${day.day.maxwind_kph} km/h</span>
                <span>Chance of Rain: ${day.day.daily_chance_of_rain}%</span>
            `
    }
  })
}

function updateBackgroundMode(isDay) {
  const main = document.getElementById("main")
  if (isDay == 1) {
    main.classList.remove("night-mode")
    main.classList.remove("bg-gradient-to-br", "from-[#374151]", "to-[#1f2937]")
    main.classList.add("bg-gradient-to-br", "from-[#14b8a6]", "to-[#0d9488]")
  } else {
    main.classList.add("night-mode")
    main.classList.remove("bg-gradient-to-br", "from-[#14b8a6]", "to-[#0d9488]")
    main.classList.add("bg-gradient-to-br", "from-[#374151]", "to-[#1f2937]")
  }
}

function initializeBackgroundVisuals() {
  const cloudsContainer = document.querySelector(".clouds-container")
  const starsContainer = document.querySelector(".stars-container")

  for (let i = 1; i <= 4; i++) {
    const cloud = document.createElement("div")
    cloud.className = `cloud cloud-${i}`
    cloudsContainer.appendChild(cloud)
  }

  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.left = Math.random() * 100 + "%"
    star.style.top = Math.random() * 60 + "%"
    star.style.animationDelay = Math.random() * 3 + "s"
    starsContainer.appendChild(star)
  }
}

initializeBackgroundVisuals()
getWeatherData("dubai")
