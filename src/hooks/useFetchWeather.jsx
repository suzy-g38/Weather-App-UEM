import { useEffect, useState } from "react";

const useFetchWeather = city => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  if (!city) return { data: null, error: "Please enter a city" };
  const fetchWeather = async () => {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const weatherData = await response.json();
      setData(weatherData);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };
  return { data, error, fetchWeather };
};

export default useFetchWeather;
