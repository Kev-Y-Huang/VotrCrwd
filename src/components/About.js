import React from "react";
import "./App.css";
import "./About.css";
import VotrCrwd from "./../assets/VotrCrwd.svg";
import Typography from "@material-ui/core/Typography";
import Alex from "./../assets/AlexCheng.jpg";
import Ethan from "./../assets/EthanLee.png";
import Kevin from "./../assets/KevinHuang.jpg";
import Lucas from "./../assets/LucasPao.JPG";
import {Box, Grid} from "@material-ui/core";


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
        <img src={VotrCrwd} alt={"logo"} width={"75%"}/>
        <hr/>
        VotrCrwd was formed by 4 Harvard students whose mission was to improve the voting process and to encourage civic participation, even in a pandemic.
        <hr/>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={6} direction={"row"}>
            <Box p={2}>
              <img src={Alex} height="100" alt="Alex"/>
              <h5> Alex Cheng <br/> Harvard 23' <br/> Utah </h5>
            </Box>
            <Box p={2}>
              <img src={Ethan} height="100" alt="Ethan"/>
              <h5> Ethan Lee <br/> Harvard 23' <br/> Massachusetts </h5>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={2}>
              <img src={Kevin} height="100" alt="Kevin"/>
              <h5> Kevin Huang <br/> Harvard 23' <br/> Minnesota </h5>
            </Box>
            <Box p={2}>
              <img src={Lucas} height="100" alt="Lucas"/>
              <h5> Lucas Pao <br/> Harvard 23' <br/> Tennessee </h5>
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default About;
