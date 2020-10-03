import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";
import GeoInfo from "./geoinfo/geoinfo";
import VotrCrwd from "./../assets/VotrCrwd.jpg";
import {Box} from "@material-ui/core";

class Register extends React.Component {
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
          <h1 style={{fontSize: 80}}>Voter Registration</h1>
          <h4>Need to register?</h4>
          <CivicInfo/>
        </Box>
        <GeoInfo/>
      </div>
    );
  }
}

export default Register;
