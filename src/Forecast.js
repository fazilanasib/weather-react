import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[4]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
