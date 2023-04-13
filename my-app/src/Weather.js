import React from "react";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Woodbridge",
    temperature: 23,
    date: "Wednesday 12:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 50,
    wind: 2,
  };
  return (
    <div className="Weather">
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
    </div>
  );
}
