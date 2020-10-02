import React from "react";

class GeoInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: "",
      latitude: "",
      postalCode: ""
    }
  }

  loadGeoInfo = (position) => {
      this.setState({latitude: position.coords.latitude});
      console.log("Latitude: ", this.state.latitude);
      this.setState({longitude: position.coords.longitude});
      console.log("Longitude: ", this.state.longitude);
  };

  showError (error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      alert("ayo fam give us permission to stalk you smh");
      break;
    }};

  getGeoLocation () {
    navigator.geolocation.getCurrentPosition(this.loadGeoInfo, this.showError);
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Location Available");
      this.getGeoLocation();
    } else {
      console.log("Location Not Available");
    }
  }

  render(){
    return(null);
  }
}

export default GeoInfo;
