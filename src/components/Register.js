import React from "react";
import "./App.css";
import {Button, Grid, Input} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USstate: "",
      disable: true,
      states: [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California",
        "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
        "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
      ]
    };
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    this.setState({disable: !this.state.states.includes(event.target.value)});
  };

  render() {
    let USstate = this.state.USstate.toLowerCase();
    let absenteeUrl = "https://www.vote.org/absentee-ballot/" + USstate;
    let infoUrl = "https://www.vote.org/state/" + USstate;

    return (
      <React.Fragment>
        <Typography variant="h2">
          Voter Information
        </Typography>
        <h4>Need to register to vote?</h4>
        <h4>Wanna request an absentee ballot form?</h4>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={12}>
            <form noValidate autoComplete="off" style={{width: "50%", margin: "auto"}}>
              <Input
                name="USstate"
                fullWidth={true}
                placeholder="Type State here"
                inputProps={{"aria-label": "description"}}
                onChange={this.handleChange}
                value={this.state.USstate}
              />
            </form>
          </Grid>
          <Grid item xs={4}>
            <Button disabled={this.state.disable} href="https://www.usa.gov/register-to-vote" color="secondary">
              Register to Vote
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button disabled={this.state.disable} href={absenteeUrl} color="secondary">Request Absentee Ballot</Button>
          </Grid>
          <Grid item xs={4}>
            <Button disabled={this.state.disable} href={infoUrl} color="secondary">General Info</Button>
          </Grid>
        </Grid>
        <hr/>
      </React.Fragment>
    );
  }
}

export default Register;
