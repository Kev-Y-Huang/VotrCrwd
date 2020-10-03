import React from "react";
import axios from "axios";
import {Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import LocationCard from "../cards/LocationCard";
import AddressInput from "../AddressInput/AddressInput";

class CivicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      val: "",
      address: "",
      info: null,
      locations: [],
      voterInfo: {
        ballotInfoUrl: "",
        votingLocationFinderUrl: ""
      }
    };
  }

  loadCivicInfo = async (method, address) => {
    const options = {
      key: process.env.REACT_APP_GOOGLE_API_KEY,
      address: address,
      electionId: 7000
    };
    try {
      const val = await axios.get(`https://www.googleapis.com/civicinfo/v2/${method}`, {params: options});
      this.setState({locations: []});
      if (val.data.earlyVoteSites) {
        val.data.earlyVoteSites.forEach(location => {
          this.setState(state => {
            const modifiedLocation = location;
            modifiedLocation.type = "Early Voting Location";
            const locations = [...state.locations, modifiedLocation];
            return {locations};
          });
        });
      }
      if (val.data.dropOffLocations) {
        val.data.dropOffLocations.forEach(location => {
          this.setState(state => {
            const modifiedLocation = location;
            modifiedLocation.type = "Drop Off Location";
            const locations = [...state.locations, modifiedLocation];
            return {locations};
          });
        });
      }
      if (val.data.pollingLocations) {
        val.data.pollingLocations.forEach(location => {
          this.setState(state => {
            const modifiedLocation = location;
            modifiedLocation.type = "Polling Location";
            const locations = [...state.locations, modifiedLocation];
            return {locations};
          });
        });
      }
      if (!val.data.earlyVoteSites) {
        this.setState({
          voterInfo: val.data.state[0].electionAdministrationBody
        });
        this.handleClickOpen();
      } else {
        this.setState({info: val.data.earlyVoteSites.map(location => location.address.city)});
      }
      this.setState(val.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  handleAddressChange = (address) => {
    this.setState({address: address});
  };

  handleClickOpen = () => this.setState({open: true});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <Box display="flex" flexDirection={"row"} width={"100%"}>
          <AddressInput name={"address"} onSelectAddress={this.handleAddressChange}/>
          <Button
            variant="contained"
            disabled={this.state.address === ""}
            onClick={() => this.loadCivicInfo("voterinfo", this.state.address)}
          >
            Button
          </Button>
        </Box>
        <br/>
        {this.state.locations.length === 0 || this.state.address === "" ? null : this.state.locations.map(location => {
          return <LocationCard location={location}/>;
        })}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"We couldn't find specific polling information for you."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              For {this.state.stateName} you can access <a href={this.state.voterInfo.ballotInfoUrl}>this site</a> to
              find your polling location and <a
              href={this.state.voterInfo.votingLocationFinderUrl}>this site</a> to find information about what will be
              on your ballot
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default CivicInfo;