# 🌤 Weather Forecast App

A simple and responsive **Weather Forecast Application** built with **JavaScript** and **Tailwind CSS**.  
It uses the **OpenWeatherMap API** to fetch real-time weather data and displays both the **current weather** and a **5-day forecast** in a clean UI.

---

## ✨ Features
- 🔍 Search weather by **city name**  
- 📍 Display **current weather conditions** (temperature, humidity, pressure, wind, clouds)  
- 📆 Show a **5-day forecast** with daily weather cards  
- 🌅 Sunrise & 🌇 sunset times for each location  
- 🎨 **Responsive UI** using Tailwind CSS (works on desktop, tablet, and mobile)  
- ⚠️ Error handling for invalid cities  

---

## 🛠️ Tech Stack
- **HTML5**  
- **JavaScript (ES6)**  
- **Tailwind CSS**  
- **OpenWeatherMap API**  

---

## 🚀 Live Demo
👉 [Click here to view the deployed app](https://sparkly-crumble-d58ea8.netlify.app/)  

---

## 🚀 Getting Started

### 1. Clone the Repository
    git clone https://github.com/vjbravo123/weather-forecast-app.git
    cd weather-forecast-app

### 2. Open the Project
    Just open the index.html file in your browser.
    (No build tools needed!)

---

## ⚙️ API Setup
This project uses the **OpenWeatherMap API**.  
We already included a sample API key in `app.js`, but for your own deployment:  

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)  
2. Get your free API key  
3. Replace it inside `app.js`:
   
       const API_KEY = "YOUR_API_KEY_HERE";

---

## 📂 Project Structure
    weather-app/
    │── index.html       # Main HTML file
    │── app.js           # JavaScript logic (API calls + UI updates)
    │── README.md        # Documentation

---

## 📌 Example Usage
1. Enter a city name (e.g., **Delhi**)  
2. Click **Search**  
3. View current weather conditions  
4. Scroll down to see the **5-day forecast**  

---

## ✅ Future Improvements
- 🌍 Auto-detect user location (Geolocation API)  
- 🌡 Toggle between °C / °F  
- ⚡ Custom alerts for extreme temperatures  
- 🎨 Dynamic background change (e.g., rainy background when it’s raining)  

---

## 📜 License
This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it.  

---

✨ Built with ❤️ using JavaScript + Tailwind CSS  
