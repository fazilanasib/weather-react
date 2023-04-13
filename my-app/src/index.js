import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";
import Buttons from "./Buttons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />

    <Buttons />
    <small>
      <a
        href="https://github.com/fazilanasib/weather-react"
        target="_blank"
        rel="noreferrer">
        Open-source code,
      </a>
      by Fazila Nasib
    </small>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
