import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt*1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    }); 
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <h1>{weatherData.city}</h1>
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="float-left"
            id="iconCloudy"
          />
          <h3>
            Today
            <p className="update">
              Last updated: <span id="date"> <FormattedDate date={weatherData.date}/></span>
            </p>
            <br />
            <span id="tempe">{Math.round(weatherData.temperature)}</span>
            <span className="links">°C</span>
          </h3>
          <ul>
            <li className="text-capitalize" id="describe">{weatherData.description}</li>
            <br />
            <li id="humidity">Humidity: {weatherData.humidity}%</li>
            <br />
            <li id="wind">Wind: {weatherData.wind}MPH</li>
          </ul>

          <div className="Forecast">
            <div>
              <p>Friday</p>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
                id="icontwo"
              />
              <p className="temp">20°</p>
            </div>
            <div>
              <p>Saturday</p>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
                id="icontwo"
              />
              <p className="temp">20°</p>
            </div>
            <div>
              <p>Sunday</p>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
                id="icontwo"
              />
              <p className="temp">20°</p>
            </div>
            <div>
              <p>Monday</p>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
                id="icontwo"
              />
              <p className="temp">20°</p>
            </div>
            <div>
              <p>Tuesday</p>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
                id="icontwo"
              />
              <p className="temp">20°</p>
            </div>
          </div>
        </div>
        <Buttons />
      </div>
    );
  } else {
    let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }

  
  };
  return (
    <div className="Weather">
      <div className="container">
        <h1>{weatherData.city}</h1>
        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          className="float-left"
          id="iconCloudy"
        />
        <h3>
          Today
          <p className="update">
            Last updated: <span id="date"> {weatherData.date}</span>
          </p>
          <br />
          <span id="tempe">{weatherData.temperature}</span>
          <span className="links">°F</span>
        </h3>
        <ul>
          <li id="describe">{weatherData.description}</li>
          <br />
          <li id="humidity">Humidity: {weatherData.humidity}%</li>
          <br />
          <li id="wind">Wind: {weatherData.wind}MPH</li>
        </ul>

        <div className="Forecast">
          <div>
            <p>Friday</p>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
              id="icontwo"
            />
            <p className="temp">20°</p>
          </div>
          <div>
            <p>Saturday</p>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
              id="icontwo"
            />
            <p className="temp">20°</p>
          </div>
          <div>
            <p>Sunday</p>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
              id="icontwo"
            />
            <p className="temp">20°</p>
          </div>
          <div>
            <p>Monday</p>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
              id="icontwo"
            />
            <p className="temp">20°</p>
          </div>
          <div>
            <p>Tuesday</p>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
              id="icontwo"
            />
            <p className="temp">20°</p>
          </div>
        </div>
      </div>
      <Buttons />
    </div>
  );
}
