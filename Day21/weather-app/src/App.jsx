import useWeather from "./hooks/useWeather";
import React, { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useWeather(query);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(city);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Description: {data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Visibility: {data.visibility / 1000} km</p>
          <p>Clouds: {data.clouds.all}%</p>
          <p>Timezone: {data.timezone}</p>
          <p>Time: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
          <p>
            Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
          <p>Country: {data.sys.country}</p>
          <p>Latitude: {data.coord.lat}</p>
          <p>Longitude: {data.coord.lon}</p>
          <p>Weather: {data.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default App;
