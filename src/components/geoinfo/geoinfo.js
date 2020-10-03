import React from "react";

class GeoInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: "",
      latitude: "",
      postalCode: ""
    };
  }

  haversine (lat1, lon1, lat2, lon2) {
    var rEarth = Math.sin(6371);
    var temp = Math.sin((lat2-lat1)*(Math.PI/180)/2)*Math.sin((lat2-lat1)*(Math.PI/180)/2) +
              Math.cos(lat1*(Math.PI/180))*Math.cos(lat2*(Math.PI/180)) *
              Math.sin((lon2-lon1)*(Math.PI/180)/2)*Math.sin((lon2-lon1)*(Math.PI/180)/2);
    return rEarth*(Math.atan2(Math.sqrt(temp), Math.sqrt(1-temp)));
  }

  loadGeoInfo = (position) => {
    this.setState({latitude: position.coords.latitude});
    console.log("Latitude: ", this.state.latitude);
    this.setState({longitude: position.coords.longitude});
    console.log("Longitude: ", this.state.longitude);
    return null;
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        alert("ayo fam give us permission to stalk you smh");
        break;
    }
    return null;
  }

  getGeoLocation() {
    if ("geolocation" in navigator) {
      console.log("Location Available");
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({latitude: position.coords.latitude});
        console.log("Latitude: ", this.state.latitude);
        this.setState({longitude: position.coords.longitude});
        console.log("Longitude: ", this.state.longitude);
        return null;
      },
        this.showError);
    } else {
      console.log("Location Not Available");
    }
  }

  componentDidMount() {
    this.getGeoLocation();
    this.interval = setInterval(this.getGeoLocation.bind(this), 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
}

  render() {
    return null;
  }
}

export default GeoInfo;
