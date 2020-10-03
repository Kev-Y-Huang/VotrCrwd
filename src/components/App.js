import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";
import GeoInfo from "./geoinfo/geoinfo";
import VotrCrwd from "./../assets/VotrCrwd.jpg";
import {Box} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box width={700}>
          <img src={VotrCrwd} alt={"logo"}/>
          <CivicInfo/>
        </Box>
        <GeoInfo/>
      </header>

      {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
      <script src="/__/firebase/7.22.0/firebase-app.js"/>
      {/* <!-- TODO: Add SDKs for Firebase products that you want to use
          https://firebase.google.com/docs/web/setup#available-libraries --> */}
      <script src="/__/firebase/7.22.0/firebase-analytics.js"/>
      {/* <!-- Initialize Firebase --> */}
      <script src="/__/firebase/init.js"/>
    </div>


  );
}

export default App;
