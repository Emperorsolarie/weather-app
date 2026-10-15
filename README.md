# Weather App

A simple weather application built with React and Vite. Search for a city to view its current temperature, relative humidity, weather condition, and wind speed.

## Features

- Search for a city by name
- Look up city coordinates using the Open-Meteo Geocoding API
- Fetch current weather data from the Open-Meteo Forecast API
- Display temperature, humidity, weather conditions, and wind speed
- Show loading and error messages for searches

## Built with

- React
- JavaScript
- CSS
- Vite
- [Open-Meteo API](https://open-meteo.com/) (no API key required for this app's current use)

## Run locally

You need Node.js installed.

1. Download or clone this repository.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal by Vite.

## Production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## API endpoints used

- Geocoding: `https://geocoding-api.open-meteo.com/v1/search`
- Current forecast: `https://api.open-meteo.com/v1/forecast`

Weather data and city search results depend on the availability of the Open-Meteo services and the location entered.
