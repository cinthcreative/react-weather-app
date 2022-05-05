import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              pleaseholder="enter a city ..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>{" "}
      <h1>Los Angeles</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6"></div>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
          alt="sunny"
        />{" "}
        28°C
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 15%</li>
          <li>Humidity: 75%</li>
          <li>Wind: 15 km/h</li>
        </ul>
      </div>
    </div>
  );
}
