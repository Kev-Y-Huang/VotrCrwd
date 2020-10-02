import React from "react";
import axios from "axios";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

class CivicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      val: "",
      address: "",
      city: "",
      stateName: "",
      info: null,
      voterInfo: {
        ballotInfoUrl: "",
        votingLocationFinderUrl: ""
      }
    };
  }

  loadCivicInfo = async (method, address, city, state) => {
    const options = {
      key: process.env.REACT_APP_GOOGLE_CIVIC_API_KEY,
      address: address.concat(" ", city, " ", state),
      electionId: 7000
    };
    try {
      const val = await axios.get(`https://www.googleapis.com/civicinfo/v2/${method}`, {params: options});
      console.log(val);
      if (!val.data.earlyVoteSites) {
        this.setState({
          voterInfo: val.data.state[0].electionAdministrationBody
        });
        this.handleClickOpen();
      } else {
        this.setState({info: val.data.earlyVoteSites.map(location => location.address.city)})
      }
      this.setState(val.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  handleChange = (event) => this.setState({[event.target.name]: event.target.value});

  handleClickOpen = () => this.setState({open: true});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <input
          name={"address"}
          placeholder={"Address..."}
          onChange={this.handleChange}
          value={this.state.address}
        />
        <br/>
        <input
          name={"city"}
          placeholder={"City..."}
          onChange={this.handleChange}
          value={this.state.city}
        />
        <br/>
        <input
          name={"stateName"}
          placeholder={"State..."}
          onChange={this.handleChange}
          value={this.state.stateName}
        />
        <br/>

        Early voting locations: {this.state.info ? this.state.info.map(location => location.concat(" ")) : "null"}
        <br/>

        <button
          onClick={() => this.loadCivicInfo("voterinfo", this.state.address, this.state.city, this.state.stateName)}>
          Button
        </button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"We couldn't find specific polling information for you."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              For {this.state.stateName} you can access <a href={this.state.voterInfo.ballotInfoUrl}>this site</a> to find your polling location and <a
              href={this.state.voterInfo.votingLocationFinderUrl}>this site</a> to find information about what will be on your ballot
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default CivicInfo;