import React, { useState } from "react";

export default function TemperatureConvertor(props) {
  const [tempUnit, setTempUnit] = useState("celcius");

  function convertToCelcius() {
    setTempUnit("celcius");
  }
  function convertToFahrenheit() {
    setTempUnit("fahrenheit");
  }
  if (tempUnit === "celcius") {
    return (
      <span className="TemperatureConvertor">
        <span className="temperature">
          {Math.round(props.tempData.temperature)}
        </span>
        <span className="unit-conversion">
          <button className="celcius active" onClick={convertToCelcius}>
            °C
          </button>{" "}
          |{" "}
          <button className="fahrenheit inactive" onClick={convertToFahrenheit}>
            °F
          </button>
        </span>
      </span>
    );
  } else {
    return (
      <span className="TemperatureConvertor">
        <span className="temperature">
          {Math.round((props.tempData.temperature * 9) / 5 + 32)}
        </span>
        <span className="unit-conversion">
          <button className="celcius inactive" onClick={convertToCelcius}>
            °C
          </button>{" "}
          |{" "}
          <button className="fahrenheit active" onClick={convertToFahrenheit}>
            °F
          </button>
        </span>
      </span>
    );
  }
}
