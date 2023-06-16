import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Time from "./Time";

export default function Weather() {
  const [city, setCity] = useState("New Delhi");
  const [weatherInfo, setWeatherInfo] = useState({});
  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeatherReport(response) {
    console.log(response);
    setWeatherInfo({
      name: response.data.name,
      time: response.data.dt,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
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
        <section>
          <h1 className="mt-5 mb-2">{weatherInfo.name}</h1>
          <ul className="time-description">
            <Time time={weatherInfo.time} />
            <li>{weatherInfo.description}</li>
          </ul>
        </section>
        <div className="row">
          <div className="col-6">
            <img src={weatherInfo.iconUrl} alt={weatherInfo.description} />
            <span className="temperature">
              {Math.round(weatherInfo.temperature)}
            </span>{" "}
            <span className="unit-conversion">
              <button className="celcius active">°C</button> |{" "}
              <button className="fahrenheit inactive">°F</button>
            </span>
          </div>
          <div className="col-3">
            <li>
              <h6 className="weather-info-heading">Real Feel</h6>
              <p className="weather-info-value">
                {Math.round(weatherInfo.realFeel)}°C
              </p>
            </li>
            <li>
              <h6 className="weather-info-heading">Wind Speed</h6>
              <p className="weather-info-value">
                {Math.round(weatherInfo.wind * 3.6)}kmph
              </p>
            </li>
          </div>
          <div className="col-3">
            <li>
              <h6 className="weather-info-heading">Humidity</h6>
              <p className="weather-info-value">
                {Math.round(weatherInfo.humidity)}%
              </p>
            </li>
            <li>
              <h6 className="weather-info-heading">Pressure</h6>
              <p className="weather-info-value">
                {Math.round(weatherInfo.pressure)}mbar
              </p>
            </li>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div className="page-loader">Loading...</div>;
  }
}
