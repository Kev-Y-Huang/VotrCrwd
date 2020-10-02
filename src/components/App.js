import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";
import GeoInfo from "./geoinfo/geoinfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CivicInfo/>
        <GeoInfo/>
      </header>
    </div>
  );
}

export default App;
