import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import About from "./About";
import Register from "./Register"
import {Route, Switch} from "react-router-dom";
import Layout from "./Layout";
import GeoInfo from "./geoinfo/geoinfo";
import {FirebaseContext} from "./Firebase";

function App() {
  const [userId] = React.useState(Math.round(Math.random() * 10000000));
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
          <Layout pagename={"Homepage"}>
            <Homepage/>
            <FirebaseContext.Consumer>
              {firebase => (<GeoInfo userId={userId} firebase={firebase}/>)}
            </FirebaseContext.Consumer>
          </Layout>
        </Route>

        <Route exact path="/about">
          <Layout pagename={"About"}>
            <About/>
            <FirebaseContext.Consumer>
              {firebase => (<GeoInfo userId={userId} firebase={firebase}/>)}
            </FirebaseContext.Consumer>
          </Layout>
        </Route>

        <Route exact path="/register">
          <Layout pagename={"Register"}>
            <Register/>
            <FirebaseContext.Consumer>
              {firebase => (<GeoInfo userId={userId} firebase={firebase}/>)}
            </FirebaseContext.Consumer>
          </Layout>
        </Route>
      </Switch>
    </>
  );
}

export default App;
