import React, { useState } from "react";
import useFetchWeather from "./hooks/useFetchWeather";
import WeatherCard from "./components/WeatherCard";
import "./styles/App.css";

const App = () => {
  const [city, setCity] = useState("");
  const { data: weatherData, error, fetchWeather } = useFetchWeather(city);

  return (
    <div className="app">
      <h1>React Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
};

export default App;
