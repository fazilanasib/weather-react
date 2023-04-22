import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <WeatherInfo data={weatherData} />

          <form className="mt-5" id="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  placeholder="Type a city of your choice 🏙️..."
                  className="form-control"
                  id="enterhere-input"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="form-control"
                  id="search-input"
                />
              </div>
              <div className="col">
                <button>Current</button>
              </div>
            </div>
          </form>
          <small>
            <a
              href="https://github.com/fazilanasib/weather-react"
              target="_blank"
              rel="noreferrer">
              Open-source code ,
            </a>
            by Fazila Nasib
          </small>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
