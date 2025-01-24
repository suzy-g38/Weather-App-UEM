import React from "react";
import PropTypes from "prop-types";
import "../styles/WeatherCard.css";

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherDetails } = weather;
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels Like: {main.feels_like}°C</p>
      <p>Condition: {weatherDetails[0].description}</p>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string
      })
    )
  }).isRequired
};

export default WeatherCard;
