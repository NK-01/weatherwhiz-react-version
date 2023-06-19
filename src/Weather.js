import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherReport from "./WeatherReport";
import WeatherForecast from "./WeatherForecast";
export default function Weather() {
  const [city, setCity] = useState("New Delhi");
  const [weatherInfo, setWeatherInfo] = useState({});
  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeatherReport(response) {
    setWeatherInfo({
      name: response.data.name,
      time: response.data.dt,
      description: response.data.weather[0].description,
      iconCode: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
      loader: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "b20ecfd3dab44a1228a1285e56521d52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeatherReport);
  }

  if (weatherInfo.loader) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <button className=" btn btn-primary search-button">Search</button>
        </form>
        <WeatherReport weatherData={weatherInfo} />
        <WeatherForecast coordinate={weatherInfo.coordinates} />
      </div>
    );
  } else {
    search();
    return <div className="page-loader">Loading...</div>;
  }
}
