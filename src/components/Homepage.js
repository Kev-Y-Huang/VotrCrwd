import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";
import VotrCrwd from "./../assets/VotrCrwd.jpg";


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: Math.round(Math.random() * 10000000)
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{fontSize: 80}}>Welcome to</h1>
        <img src={VotrCrwd} alt={"logo"}/>
        <h4>The All-American way to Vote.</h4>
        <h5>Type in your address to find the nearest polling station near you!</h5>
        <CivicInfo/>
      </React.Fragment>
    );
  }
}

export default Homepage;
