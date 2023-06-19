import React from "react";
import Time from "./Time";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherReport(props) {
  return (
    <div className="WeatherReport">
      <section>
        <h1 className="mt-5 mb-2">{props.weatherData.name}</h1>
        <ul className="time-description">
          <Time time={props.weatherData.time} />
          <li>{props.weatherData.description}</li>
        </ul>
      </section>
      <div className="row">
        <div className="col-6">
          <WeatherIcon
            className="weather-icon"
            weatherIconCode={props.weatherData.iconCode}
            iconSize={62}
          />
          <WeatherTemperature temperature={props.weatherData.temperature} />
        </div>
        <div className="col-3">
          <li>
            <h6 className="weather-info-heading">Real Feel</h6>
            <p className="weather-info-value">
              {Math.round(props.weatherData.realFeel)}°C
            </p>
          </li>
          <li>
            <h6 className="weather-info-heading">Wind Speed</h6>
            <p className="weather-info-value">
              {Math.round(props.weatherData.wind * 3.6)} kmph
            </p>
          </li>
        </div>
        <div className="col-3">
          <li>
            <h6 className="weather-info-heading">Humidity</h6>
            <p className="weather-info-value">
              {Math.round(props.weatherData.humidity)}%
            </p>
          </li>
          <li>
            <h6 className="weather-info-heading">Pressure</h6>
            <p className="weather-info-value">
              {Math.round(props.weatherData.pressure)} mbar
            </p>
          </li>
        </div>
      </div>
    </div>
  );
}
