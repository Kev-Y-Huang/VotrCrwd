import React from "react";
import CivicInfo from "./civic-info/CivicInfo";
import VotrCrwd from "./../assets/VotrCrwd.svg";
import Typography from "@material-ui/core/Typography";

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
        <Typography variant="h2">
          Welcome to
        </Typography>
        <img src={VotrCrwd} alt={"logo"} width={"75%"}/>
        <h3>The safest way to Vote.</h3>
        <h3>Type in your address to find the nearest polling station near you!</h3>
        <CivicInfo/>
      </React.Fragment>
    );
  }
}

export default Homepage;
