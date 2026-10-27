import { useState } from "react";

function WeatherApp(){

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleCityChange(event){
        setCity(event.target.value);
    }

    async function handleSearch() {
        console.log(city);
        setError("");
        setLoading(true);
     

        try{
            if(city.trim()==="" ){
                setError("Please enter a city");

                return;
            }
            const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
            const reply = await geoResponse.json();
            console.log(reply);
                
            

            if (reply.results.length !== 0){
                const latitude = reply.results[0].latitude;
                const longitude = reply.results[0].longitude;
            

                console.log(latitude);
                console.log(longitude);

                const weatherUrl = await fetch  (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`);
                const weatherResponse = await weatherUrl.json();
                console.log(weatherResponse);

                const temperature = weatherResponse.current.temperature_2m;
                const humidity = weatherResponse.current.relative_humidity_2m;
                const weatherCode = weatherResponse.current.weather_code;
                const windSpeed = weatherResponse.current.wind_speed_10m;

                console.log(temperature);
                console.log(humidity);
                console.log(weatherCode);
                console.log(windSpeed);

                setWeather({
                    city: city,
                    temperature: temperature,
                    humidity: humidity,
                    weatherCode: weatherCode,
                    windSpeed: windSpeed,
                });
            }else{
                setError("City not found");
            }
        } catch (error) {
            console.log(error);
            setError("Something went wrong. Please try again.");
        
        }finally {
            setLoading(false);
        }
    }

    function getWeatherDescription(weatherCode){
        switch(weatherCode){
            case 0:
                return "Clear Sky";

            case 1:
                return "Mainly Clear";

            case 2:
                return "Partly Cloudy";

            case 3:
                return "Overcast";

            default:
                return "Unknown";
        }

        switch(weatherCode){
            case 51:
            case 53:
            case 55:
                return "Drizzle";

            case 61:
            case 63:
            case 65:
                return "Rain";

            case 71:
            case 73:
            case 75:
                return "Snow";

            case 95:
                return "Thunderstorm"
        }
    }

   return (
    <div className="weather-app">
        <header className="weather-header">
            <a href="/" className="weather-logo">
                <span className="logo-icon">☀</span>
                <span>SkyCast</span>
            </a>

            <span className="header-label">WEATHER FORECAST</span>
        </header>

        <main className="weather-main">
            <section className="welcome-section">
                <p className="eyebrow">YOUR PERSONAL WEATHER ASSISTANT</p>
                <h1>Weather, at a glance.</h1>
                <p className="welcome-description">
                    Discover the weather conditions in any city around the world.
                </p>
            </section>

            <section className="search-section">
                <div className="search-box">
                    <span className="search-icon">⌕</span>

                    <input
                        className="city-input"
                        type="text"
                        placeholder="Search for a city..."
                        value={city}
                        onChange={handleCityChange}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") handleSearch();
                        }}
                    />

                    <button
                        className="search-button"
                        onClick={handleSearch}
                        disabled={loading}
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>

                {error && <p className="error-message">{error}</p>}
            </section>

            {loading && (
                <p className="loading-message">Fetching weather information...</p>
            )}

            {weather ? (
                <section className="weather-dashboard">
                    <div className="current-weather-card">
                        <div className="weather-location">
                            <span>📍</span>
                            <span>{weather.city}</span>
                        </div>

                        <p className="weather-description">
                            {getWeatherDescription(weather.weatherCode)}
                        </p>

                        <div className="temperature-display">
                            <span className="temperature-value">
                                {Math.round(weather.temperature)}°
                            </span>
                            <span className="temperature-unit">C</span>
                        </div>

                        <p className="weather-caption">Current temperature</p>

                        <div className="weather-illustration" aria-hidden="true">
                            {weather.weatherCode === 0 ? "☀️" :
                             weather.weatherCode <= 3 ? "🌤️" :
                             weather.weatherCode >= 95 ? "⛈️" :
                             weather.weatherCode >= 51 ? "🌧️" : "🌥️"}
                        </div>
                    </div>

                    <div className="weather-details">
                        <article className="detail-card">
                            <span className="detail-icon">💧</span>
                            <p className="detail-label">Humidity</p>
                            <h2>{weather.humidity}%</h2>
                        </article>

                        <article className="detail-card">
                            <span className="detail-icon">💨</span>
                            <p className="detail-label">Wind speed</p>
                            <h2>{weather.windSpeed} <small>km/h</small></h2>
                        </article>

                        <article className="detail-card">
                            <span className="detail-icon">🌡️</span>
                            <p className="detail-label">Temperature</p>
                            <h2>{Math.round(weather.temperature)}°C</h2>
                        </article>
                    </div>
                </section>
            ) : (
                !loading && (
                    <section className="empty-weather">
                        <div className="empty-weather-icon">🌤️</div>
                        <h2>Your weather journey starts here</h2>
                        <p>Search for a city to see its current weather conditions.</p>
                    </section>
                )
            )}
        </main>

        <footer className="weather-footer">
            <p>SkyCast · Weather data powered by Open-Meteo</p>
        </footer>
    </div>
);
}
export default WeatherApp