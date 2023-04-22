import React from "react";

import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="float-left">
        <WeatherIcon code={props.data.icon} />
      </div>
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
