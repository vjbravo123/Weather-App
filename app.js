const API_KEY = "68ce351fa283eac430a90ad99057eceb";
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const errorEl = document.getElementById("error");
  const weatherCard = document.getElementById("weatherCard");
  const forecastSection = document.getElementById("forecastSection");

  if (!city) {
    showError("⚠️ Please enter a city name.");
    return;
  }

  try {
    // Fetch current weather
    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const currentData = await currentRes.json();

    // Updating the UI with the coming data
    document.getElementById("cityName").textContent = `${currentData.name}, ${currentData.sys.country}`;
    document.getElementById("description").textContent = currentData.weather[0].description;
    document.getElementById("temperature").textContent = `${currentData.main.temp} °C`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${currentData.main.humidity}%`;
    document.getElementById("wind").textContent = `💨 Wind: ${currentData.wind.speed} m/s`;
    document.getElementById("pressure").textContent = `📊 Pressure: ${currentData.main.pressure} hPa`;
    document.getElementById("clouds").textContent = `☁ Cloudiness: ${currentData.clouds.all}%`;
    document.getElementById("weatherIcon").src =
      `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`;

    const sunrise = new Date(currentData.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(currentData.sys.sunset * 1000).toLocaleTimeString();
    document.getElementById("sunrise").textContent = `🌅 Sunrise: ${sunrise}`;
    document.getElementById("sunset").textContent = `🌇 Sunset: ${sunset}`;

    weatherCard.classList.remove("hidden");
    errorEl.classList.add("hidden");

    // Fetch 5-day forecast
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    const forecastData = await forecastRes.json();

    displayForecast(forecastData.list);

    forecastSection.classList.remove("hidden");

  } catch (err) {
    showError(`⚠️ ${err.message}`);
    weatherCard.classList.add("hidden");
    forecastSection.classList.add("hidden");
  }
}

function displayForecast(list) {
  const forecastEl = document.getElementById("forecastCards");
  forecastEl.innerHTML = "";

  // Pick 1 forecast per day (around 12:00)
  const daily = list.filter(item => item.dt_txt.includes("12:00:00"));

  daily.forEach(day => {
    const date = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    const temp = `${Math.round(day.main.temp)}°C`;
    const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    const desc = day.weather[0].description;

    const card = `
      <div class="bg-white rounded-lg shadow-md p-4 text-center">
        <h4 class="font-semibold text-gray-800">${date}</h4>
        <img src="${icon}" alt="icon" class="mx-auto">
        <p class="text-lg font-bold text-blue-600">${temp}</p>
        <p class="text-sm text-gray-600 capitalize">${desc}</p>
        <p class="text-sm">💧 ${day.main.humidity}%</p>
        <p class="text-sm">💨 ${day.wind.speed} m/s</p>
      </div>
    `;
    forecastEl.innerHTML += card;
  });
}

function showError(message) {
  const errorEl = document.getElementById("error");
  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
}
