import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";
import WeatherTemp from "./WeatherTemp";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <WeatherIcon code={props.data.icon} />
      <h3>
        Today
        <div className="update">
          Last updated:{" "}
          <span id="date">
            {" "}
            <FormattedDate date={props.data.date} />
          </span>
        </div>
        <WeatherTemp celsius={props.data.temperature} />
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
