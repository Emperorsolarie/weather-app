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
        setError("");
        setLoading(true);
     

        try{
            if(city.trim()==="" ){
                setError("Please enter a city");

                return;
            }
            const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.trim())}`);
            const reply = await geoResponse.json();
                
            

            if (reply.results && reply.results.length > 0){
                const latitude = reply.results[0].latitude;
                const longitude = reply.results[0].longitude;
            


                const weatherUrl = await fetch  (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`);
                const weatherResponse = await weatherUrl.json();

                const temperature = weatherResponse.current.temperature_2m;
                const humidity = weatherResponse.current.relative_humidity_2m;
                const weatherCode = weatherResponse.current.weather_code;
                const windSpeed = weatherResponse.current.wind_speed_10m;


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
        } catch {
            setError("Something went wrong. Please try again.");
        
        }finally {
            setLoading(false);
        }
    }

    function getWeatherDescription(weatherCode){
        switch(weatherCode){
            case 0:
                return "Clear sky";
            case 1:
                return "Mainly clear";
            case 2:
                return "Partly cloudy";
            case 3:
                return "Overcast";
            case 45:
            case 48:
                return "Fog";
            case 51:
            case 53:
            case 55:
                return "Drizzle";
            case 56:
            case 57:
                return "Freezing drizzle";
            case 61:
            case 63:
            case 65:
                return "Rain";
            case 66:
            case 67:
                return "Freezing rain";
            case 71:
            case 73:
            case 75:
                return "Snowfall";
            case 77:
                return "Snow grains";
            case 80:
            case 81:
            case 82:
                return "Rain showers";
            case 85:
            case 86:
                return "Snow showers";
            case 95:
            case 96:
            case 99:
                return "Thunderstorm";
            default:
                return "Unknown conditions";
        }
    }

    return(
        <div className="div-container">
            <h1 className="heading">MY WEATHER APP</h1>
            <input className="input" type="text" placeholder="Enter a city" value={city} onChange={handleCityChange}></input>
            <button className="search-button" onClick={handleSearch}>Search</button>
            <p className="loading">{loading && "Loading weather..."}</p>

            <p className="city">📍City: <span>{weather ? weather.city : ""}</span> </p>
            <p className="temperature">🌡️ Temperature: <span> {weather ? weather.temperature : ""} °C</span></p>
            
            <p className="humidity">💧Humidity: <span>{weather ? weather.humidity : ""} %</span></p>
            <p className="condition">☁️Condition: <span>{weather ? getWeatherDescription(weather.weatherCode) : ""}</span></p>
            <p className="wind-speed">💨 Wind Speed:<span> {weather ? weather.windSpeed : ""}</span></p>
            <p>{error && error}</p>
        </div>
    );
}
export default WeatherApp