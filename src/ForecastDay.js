import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    return Math.round(props.data.temp.max);
  }
  function minTemperature() {
    return Math.round(props.data.temp.min);
  }

  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayNumber = date.getDay();
    return days[dayNumber];
  }

  return (
    <div className="ForecastDay">
      <div className="text-center mb-3">{forecastDay()}</div>
      <div className="forecast-icon">
        <WeatherIcon
          iconSize={54}
          weatherIconCode={props.data.weather[0].icon}
        />
      </div>
      <div className="min-max-temperature mt-3">
        <span className="max-temperature">{maxTemperature()}°C</span>
        <span className="min-temperature">{minTemperature()}°C</span>
      </div>
    </div>
  );
}
