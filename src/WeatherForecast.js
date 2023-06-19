import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  const [loader, setLoader] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoader(false);
  }, [props.coordinate]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoader(true);
  }

  function search() {
    let apiKey = `597c40c39084687093b091cd48b366f8`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinate.lat}&lon=${props.coordinate.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loader) {
    return (
      <div className="WeatherForecast mt-4">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5)
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            else return null;
          })}
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
