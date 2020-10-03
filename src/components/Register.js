import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";
import GeoInfo from "./geoinfo/geoinfo";
import VotrCrwd from "./../assets/VotrCrwd.jpg";
import {Box, Input, Button} from "@material-ui/core";
import {FirebaseContext} from "./Firebase"
import {Link} from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {USstate: "", disable: true};
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    let USstate = this.state.USstate.toLowerCase()
    let absenteeUrl = "https://www.vote.org/absentee-ballot/" + USstate
    let infoUrl = "https://www.vote.org/state/" + USstate

    return (
      <div style={{backgroundColor: "rgba(255, 255, 255, 0.75)", width: 800}}>
        <Box width={"100%"}
            justify="center"
            alignItems="center"
        >
        <h1 style={{fontSize: 80}}>Voter Registration</h1>
        <h4>Need to register to vote?</h4>
        <h4>Wanna request an absentee ballot form?</h4>
        <form noValidate autoComplete="off">
          <Input
            name="USstate"
            placeholder="Type in your State here"
            style={{ width: 400 }}
            inputProps={{ 'aria-label': 'description' }}
            onChange={this.handleChange}
            value={this.state.USstate}
          />
        </form>
        <br/>
        <Button href="https://www.usa.gov/register-to-vote" color="secondary">Register to Vote</Button> {" "}
        <Button href={absenteeUrl} color="secondary">Request Absentee Ballot</Button>
        <Button href={infoUrl} color="secondary">General Information</Button>
        <hr/>
        </Box>
      </div>
    );
  }
}

export default Register;
