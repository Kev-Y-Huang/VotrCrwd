import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import About from "./About";
import Register from "./Register"
import {AppBar, Toolbar, Button, Menu, MenuItem}from "@material-ui/core";
import {Switch, Route, Link} from "react-router-dom";
import americanFlag from "./../assets/americanFlag.jpg"

function App() {
  return (
    <>
      {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
      <script src="/__/firebase/7.22.0/firebase-app.js"/>
      {/* <!-- TODO: Add SDKs for Firebase products that you want to use
          https://firebase.google.com/docs/web/setup#available-libraries --> */}
      <script src="/__/firebase/7.22.0/firebase-analytics.js"/>
      {/* <!-- Initialize Firebase --> */}
      <script src="/__/firebase/init.js"/>

      <Switch>
        <Route exact path="/">
          <div className="App">
            <AppBar color="white" position="static">
              <Toolbar>
                <Button color="secondary" href="/">Locations</Button>
                <Button color="secondary" href="/about">About</Button>
                <Button color="secondary" href="/register">Voter Registration</Button>
              </Toolbar>
            </AppBar>
            <header style={{ backgroundImage: `url(${americanFlag})` }} className="App-header">
              <Homepage/>
            </header>
          </div>
        </Route>

        <Route exact path="/about">
          <div className="App">
            <AppBar color="white" position="static">
              <Toolbar>
                <Button color="secondary" href="/">Locations</Button>
                <Button color="secondary" href="/about">About</Button>
                <Button color="secondary" href="/register">Voter Registration</Button>
              </Toolbar>
            </AppBar>
            <header style={{ backgroundImage: `url(${americanFlag})` }} className="App-header">
              <About/>
            </header>
          </div>
        </Route>

        <Route exact path="/register">
          <div className="App">
            <AppBar color="white" position="static">
              <Toolbar>
                <Button color="secondary" href="/">Locations</Button>
                <Button color="secondary" href="/about">About</Button>
                <Button color="secondary" href="/register">Voter Registration</Button>
              </Toolbar>
            </AppBar>
            <header style={{ backgroundImage: `url(${americanFlag})` }} className="App-header">
              <Register/>
            </header>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
