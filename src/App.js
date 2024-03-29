import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is created by{" "}
          <a
            href="https://github.com/SoniaCarrilloM"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sonia Carrillo{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/SoniaCarrilloM/weather-five"
            target="_blank"
            rel="noreferrer noopener"
          >
            open sourced on GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://kaleidoscopic-maamoul-3d803e.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
