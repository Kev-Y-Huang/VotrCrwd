import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";
import GeoInfo from "./geoinfo/geoinfo";
import VotrCrwd from "./../assets/VotrCrwd.jpg";
import onlyFans from "./../assets/buyCoffee.jpeg";
import {Box} from "@material-ui/core";
import {Link, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <Box width={"75%"}
                 justify="center"
                 alignItems="center">
              <img src={VotrCrwd} alt={"logo"}/>
              <CivicInfo/>
            </Box>
            <GeoInfo/>
          </header>

          <Link to={{pathname: "https://onlyfans.com"}} target="_blank">
            <img src={onlyFans} alt={"Buy Me A Coffee"}/>
          </Link>

          {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
          <script src="/__/firebase/7.22.0/firebase-app.js"/>
          {/* <!-- TODO: Add SDKs for Firebase products that you want to use
              https://firebase.google.com/docs/web/setup#available-libraries --> */}
          <script src="/__/firebase/7.22.0/firebase-analytics.js"/>
          {/* <!-- Initialize Firebase --> */}
          <script src="/__/firebase/init.js"/>
        </div>
      </Route>
      <Route exact path="/about">This is the about page</Route>
    </Switch>

  );
}

export default App;
