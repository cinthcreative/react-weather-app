import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <center>
        <WeatherIcon code={props.data.icon} size={180} />
      </center>

      <div class="row justify-content-around align-items-start">
        <div class="col-5">
          <h1>{props.data.city}</h1>{" "}
          <WeatherTemperature fahrenheit={Math.round(props.data.temperature)} />
        </div>
        <div class="col-3">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Feels Like: {Math.round(props.data.feelslike)}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/h</li>
          </ul>
        </div>
      </div>

      <hr />
    </div>
  );
}
