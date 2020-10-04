import React from "react";
import "./App.css";
import {Box, Input, Button} from "@material-ui/core";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USstate: "",
      disable: true,
      states: [
        'Alabama','Alaska','Arizona','Arkansas','California',
        'Colorado','Connecticut','Delaware','Florida','Georgia',
        'Hawaii','Idaho','Illinois','Indiana','Iowa',
        'Kansas','Kentucky','Louisiana','Maine','Maryland',
        'Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
        'Montana','Nebraska','Nevada','New Hampshire','New Jersey',
        'New Mexico','New York','North Carolina','North Dakota','Ohio',
        'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
        'South Dakota','Tennessee','Texas','Utah','Vermont',
        'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
      ]
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ disable: !this.state.states.includes(event.target.value)});
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
        <h1 style={{fontSize: 80}}>Voter Information</h1>
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
        <Button disabled={this.state.disable} href="https://www.usa.gov/register-to-vote" color="secondary">Register to Vote</Button> {" "}
        <Button disabled={this.state.disable} href={absenteeUrl} color="secondary">Request Absentee Ballot</Button>
        <Button disabled={this.state.disable} href={infoUrl} color="secondary">General Information</Button>
        <hr/>
        </Box>
      </div>
    );
  }
}

export default Register;
