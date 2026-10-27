# 🌦️ Weather App

A modern, responsive weather application built with **React** and **Vite** that allows users to search for a city and view its current weather conditions. The application uses the Open-Meteo API to retrieve location and weather data.

## ✨ Features

- **City Search:** Search for a city to retrieve its current weather information.
- **Real-Time Weather Data:** Fetch current weather conditions from the Open-Meteo API.
- **Temperature Display:** View the current temperature in Celsius.
- **Humidity Information:** Check the current relative humidity.
- **Wind Speed:** View the current wind speed.
- **Weather Conditions:** Display a description of the current weather.
- **Loading Feedback:** Show a loading state while retrieving weather data.
- **Error Handling:** Display helpful messages for empty searches, unavailable cities, and request failures.
- **Responsive Design:** Adapt the interface to desktop and mobile screen sizes.
- **Modern Interface:** A dark dashboard design with blue gradients and weather information cards.

## 🛠️ Technologies Used

- **React** — Building the user interface and managing component state.
- **JavaScript (ES6+)** — Application logic and API requests.
- **CSS3** — Styling, animations, and responsive layouts.
- **Vite** — Development server and build tool.
- **Open-Meteo Geocoding API** — Finding geographic coordinates from city names.
- **Open-Meteo Forecast API** — Retrieving current weather conditions.
- **HTML5** — Application structure.

## 🌐 APIs

This project uses the following free weather data services:

- **Geocoding API:** https://geocoding-api.open-meteo.com/v1/search
- **Weather Forecast API:** https://api.open-meteo.com/v1/forecast

The geocoding API converts a city name into latitude and longitude coordinates. These coordinates are then used to request the city's current weather data.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/Emperorsolarie/weather-app.git
```

### 2. Navigate to the project directory

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

`http://localhost:5173`

## 📦 Build for Production

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

*Note: The exact files inside `src/` may vary depending on your implementation.*

## 📱 Responsive Design

The application is designed to work across desktop, tablet, and mobile screens, providing a usable layout for searching cities and viewing weather information.

## 🔮 Future Improvements

- Add a five- or seven-day weather forecast.
- Support searching by country or region when cities share the same name.
- Add weather icons for a wider range of weather conditions.
- Allow users to switch between Celsius and Fahrenheit.
- Add a location-based weather feature.
- Display additional details such as precipitation and atmospheric pressure.

## 👨‍💻 Author

**Emperor Solarie**

- GitHub: [@Emperorsolarie](https://github.com/Emperorsolarie)

## 📄 License

This project is available for learning and personal portfolio purposes. Add a formal license file if you intend to distribute it under a specific open-source license.

