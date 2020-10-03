import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";
import GeoInfo from "./geoinfo/geoinfo";
import VotrCrwd from "./../assets/VotrCrwd.jpg";
import {Box} from "@material-ui/core";


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{backgroundColor: "rgba(255, 255, 255, 0.75)", width: 1500}}>
        <Box width={"100%"}
             justify="center"
             alignItems="center"
				>
          <h1 style={{fontSize: 80}}>Welcome to</h1>
          <img src={VotrCrwd} alt={"logo"}/>
          <h4>The All-American way to Vote.</h4>
          <h5>Type in your address to find the nearest polling station near you!</h5>
          <CivicInfo/>
        </Box>
        <GeoInfo/>
      </div>
    );
  }
}

export default Homepage;
