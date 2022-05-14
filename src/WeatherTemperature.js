import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{props.fahrenheit}</span>
      <span className="unit">°F</span>
    </div>
  );
}
