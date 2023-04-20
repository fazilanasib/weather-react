import React from "react";
import "./App.css";

export default function Buttons() {
  return (
    <div className="Buttons">
      <form className="mt-5" id="form">
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              placeholder="Type a city of your choice 🏙️..."
              className="form-control"
              id="enterhere-input"
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
  );
}
