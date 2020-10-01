import React from "react";
import axios from "axios";

class CivicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      election: {
        name: ""
      }
    };
  }

  async componentDidMount() {
    this.loadCivicInfo("voterinfo", "1600 Pennsylvania Avenue NW", "Washington", "DC");
  }

  async loadCivicInfo(method, address, city, state) {
    const options = {
      key: process.env.REACT_APP_GOOGLE_CIVIC_API_KEY,
      address: address.concat(" ", city, " ", state),
      electionId: 7000
    };
    const val = await axios.get(`https://www.googleapis.com/civicinfo/v2/${method}`, {params: options});
    console.log(val.data);
    this.setState(val.data);
  }

  render() {
    return (
      <div>
        {this.state.election.name}
      </div>
    );
  }
}

export default CivicInfo;