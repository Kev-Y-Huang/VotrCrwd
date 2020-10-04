import React from "react";
import "./App.css";
import "./About.css";
import VotrCrwd from "./../assets/VotrCrwd.svg";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
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
        VotrCrwd was formed by 4 students from a medium-sized liberal arts college just outside of Boston.
        <hr/>
      </React.Fragment>
    );
  }
}

export default About;
