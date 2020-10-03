import React from "react";
import axios from "axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddressInput from "../AddressInput/AddressInput";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import LocationCard from "../cards/LocationCard";

class CivicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      val: "",
      address: "",
      addressInfo: "",
      info: null,
      dropOffLocations: [],
      earlyLocations: [],
      votingLocations: [],
      voterInfo: {
        ballotInfoUrl: "",
        votingLocationFinderUrl: ""
      }
    };
  }

  loadCivicInfo = async (method, address) => {
    const options = {
      key: process.env.REACT_APP_GOOGLE_API_KEY,
      address: address.description,
      electionId: 7000
    };
    const homeOptions = {
      placeid: address.place_id,
      key: process.env.REACT_APP_GOOGLE_API_KEY
    };
    try {
      const home = await axios.get("/.netlify/functions/google-api", {params: homeOptions});
      this.setState({addressInfo: home.data.msg.result});
      const val = await axios.get(`https://www.googleapis.com/civicinfo/v2/${method}`, {params: options});
      this.setState({
        earlyLocations: [],
        dropOffLocations: [],
        votingLocations: []
      });
      if (val.data.earlyVoteSites) {
        val.data.earlyVoteSites.forEach(location => this.setState(state => {
          const modifiedLocation = location;
          modifiedLocation.type = "Early Voting Location";
          const locations = [...state.earlyLocations, modifiedLocation];
          return {earlyLocations: locations};
        }));
      }
      if (val.data.dropOffLocations) {
        val.data.dropOffLocations.forEach(location => this.setState(state => {
          const modifiedLocation = location;
          modifiedLocation.type = "Drop Off Location";
          const locations = [...state.dropOffLocations, modifiedLocation];
          return {dropOffLocations: locations};
        }));
      }
      if (val.data.pollingLocations) {
        val.data.pollingLocations.forEach(location => this.setState(state => {
          const modifiedLocation = location;
          modifiedLocation.type = "Polling Location";
          const locations = [...state.votingLocations, modifiedLocation];
          return {votingLocations: locations};
        }));
      }
      if (!val.data.earlyVoteSites) {
        this.setState({
          voterInfo: val.data.state[0].electionAdministrationBody
        });
        this.handleClickOpen();
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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12}>
          <Box display="flex" flexDirection={"row"} width={"50%"} justifyContent={"center"} m={"auto"}>
            <AddressInput name={"address"} onSelectAddress={this.handleAddressChange}/>
            <Button
              variant="contained"
              disabled={this.state.address === ""}
              onClick={() => this.loadCivicInfo("voterinfo", this.state.address)}
            >
              <SearchIcon/>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          {this.state.earlyLocations.length !== 0 && <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Early Vote Locations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box width={1}>
                {this.state.earlyLocations.map((location, index) => {
                  return <LocationCard location={location} key={`location-${index}`}/>;
                })}
              </Box>
            </AccordionDetails>
          </Accordion>}
          {this.state.dropOffLocations.length !== 0 && <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Drop Off Locations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box width={1}>
                {this.state.dropOffLocations.map((location, index) => {
                  return <LocationCard location={location} key={`location-${index}`}/>;
                })}
              </Box>
            </AccordionDetails>
          </Accordion>}
          {this.state.votingLocations.length !== 0 && <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Polling Locations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box width={1}>
                {this.state.votingLocations.map((location, index) => {
                  return <LocationCard location={location} key={`location-${index}`}/>;
                })}
              </Box>
            </AccordionDetails>
          </Accordion>}
        </Grid>
        {this.state.earlyLocations.length !== 0 && <Grid item xs={6}>
          <GoogleMaps home={this.state.addressInfo} locations={[
            ...this.state.earlyLocations,
            ...this.state.dropOffLocations,
            ...this.state.votingLocations
          ]}/>
        </Grid>}
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
      </Grid>
    );
  }
}

export default CivicInfo;