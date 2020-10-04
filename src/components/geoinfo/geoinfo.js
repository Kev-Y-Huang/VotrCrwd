import React from "react";

class GeoInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: "",
      latitude: "",
      postalCode: "",
      loading: false,
      locations: [],
    };
  }

  loadGeoInfo = (position) => {
    this.setState({ latitude: position.coords.latitude });
    this.setState({ longitude: position.coords.longitude });
    return null;
  };

  showError(error) {
    if (error.code === error.PERMISSION_DENIED) {
      console.log("Please allow access to location for VotrCrwd to function");
      alert("VotrCrwd needs your location to function properly");
    } else {
      console.log("Test");
      alert("Test");
    }
    return null;
  }

  getGeoLocation() {
    if ("geolocation" in navigator) {
      console.log("Location Available");
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ latitude: position.coords.latitude });
        this.setState({ longitude: position.coords.longitude });

        var ref = this.props.firebase.locations();
        var now = Date.now();
        var cutoff = now - 60 * 60 * 1000;
        ref.orderByChild("timestamp").endAt(cutoff).limitToLast(1);

        this.props.firebase.locations().child(this.props.userId).set({
          longitude: this.state.longitude,
          latitude: this.state.latitude,
          timestamp: Date.now(),
        });
        return null;
      }, this.showError);
    } else {
      console.log("Location Not Available");
    }
  }

  componentDidMount() {
    this.getGeoLocation();
    this.interval = setInterval(this.getGeoLocation.bind(this), 10000);

    this.props.firebase.locations().on("value", (snapshot) => {
      const locationObject = snapshot.val();

      if (locationObject) {
        const locationList = Object.keys(locationObject).map((key) => ({
          ...locationObject[key],
          uid: key,
        }));

        this.setState({
          locations: locationList,
          loading: false,
        });
      } else {
        this.setState({ messages: null, loading: false });
      }
    });
  }

  componentWillUnmount() {
    this.props.firebase.locations().off();
    clearInterval(this.interval);
  }

  render() {
    return null;
  }
}

export default GeoInfo;
