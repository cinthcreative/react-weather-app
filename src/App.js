import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello from React</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://cinthiakoutianov.com"
            target="_blank"
            rel="noreferrer"
          >
            Cinthia Koutianov
          </a>{" "}
          and it is {""}
          <a
            href="https://github.com/cinthcreative/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
