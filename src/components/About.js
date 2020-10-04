import React from "react";
import "./App.css";
import "./About.css";
import VotrCrwd from "./../assets/VotrCrwd.svg";
import Typography from "@material-ui/core/Typography";
import Alex from "./../assets/AlexCheng.jpg";
import Ethan from "./../assets/EthanLee.png";
import Kevin from "./../assets/KevinHuang.jpg";
import Lucas from "./../assets/LucasPao.JPG";


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2">
          About
        </Typography>
        <img src={VotrCrwd} alt={"logo"}/>
        <hr/>
        VotrCrwd was formed by 4 Harvard students whose mission was to transform democracy.
        <hr/>
        <div id="parent">
          <div>
            <img src={Alex} height="100" alt="Alex"/>
            <h6> Alex Cheng <br/> Harvard 23' <br/> Utah </h6>
          </div>
          <div>
            <img src={Ethan} height="100" alt="Ethan"/>
            <h6> Ethan Lee <br/> Harvard 23' <br/> Massachusetts </h6>
          </div>
          <div>
            <img src={Kevin} height="100" alt="Kevin"/>
            <h6> Kevin Huang <br/> Harvard 23' <br/> Minnesota </h6>
          </div>
          <div>
            <img src={Lucas} height="100" alt="Lucas"/>
            <h6> Lucas Pao <br/> Harvard 23' <br/> Tennessee </h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
