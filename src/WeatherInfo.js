import React from "react";
import "./App.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <img
        src={props.data.imgUrl}
        alt={props.data.description}
        className="float-left"
        id="iconCloudy"
      />
      <h3>
        Today
        <p className="update">
          Last updated:{" "}
          <span id="date">
            {" "}
            <FormattedDate date={props.data.date} />
          </span>
        </p>
        <br />
        <span id="tempe">{props.data.temperature}</span>
        <span className="links">°F</span>
      </h3>
      <ul>
        <li id="describe">{props.data.description}</li>
        <br />
        <li id="humidity">Humidity: {props.data.humidity}%</li>
        <br />
        <li id="wind">Wind: {props.data.wind} MPH</li>
      </ul>
    </div>
  );
}
