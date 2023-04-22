import React, { useState } from "react";
import "./App.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span id="tempe">{Math.round(props.celsius)}</span>
        <span className="links">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span id="tempe">{Math.round(fahrenheit())}</span>
        <span className="links">
          {" "}
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>
          | °F{" "}
        </span>
      </div>
    );
  }
}
