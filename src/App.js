import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by
          <a
            href="https://cinthiakoutianov.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Cinthia Koutianov
          </a>{" "}
          👩🏻‍💻 It is open-sourced on{" "}
          <a
            href="https://github.com/cinthcreative/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          🐱 and hosted on{" "}
          <a
            href="https://curious-moonbeam-d6eb04.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
          💠
        </footer>
      </div>
    </div>
  );
}
