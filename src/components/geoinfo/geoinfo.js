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

  haversine (lat1, lon1, lat2, lon2) {
    var rEarth = Math.sin(6371);
    var temp = Math.sin((lat2-lat1)*(Math.PI/180)/2)*Math.sin((lat2-lat1)*(Math.PI/180)/2) +
              Math.cos(lat1*(Math.PI/180))*Math.cos(lat2*(Math.PI/180)) *
              Math.sin((lon2-lon1)*(Math.PI/180)/2)*Math.sin((lon2-lon1)*(Math.PI/180)/2);
    return rEarth*(Math.atan2(Math.sqrt(temp), Math.sqrt(1-temp)));
  }

  loadGeoInfo = (position) => {
    this.setState({latitude: position.coords.latitude});
    this.setState({longitude: position.coords.longitude});
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
        this.setState({longitude: position.coords.longitude});

        var ref = this.props.firebase.locations();
        var now = Date.now();
        var cutoff = now - 60 * 60 * 1000;
        var old = ref.orderByChild('timestamp').endAt(cutoff).limitToLast(1);
        var listener = old.on('child_added', function(snapshot) {
            snapshot.ref.remove();
        });

        this.props.firebase.locations().child(this.props.userId).set({
          longitude: this.state.longitude,
          latitude: this.state.latitude,
          timestamp: Date.now(),
        });
        return null;
      },
        this.showError);
    } else {
      console.log("Location Not Available");
    }
  }

  componentDidMount() {
    this.getGeoLocation();
    this.interval = setInterval(this.getGeoLocation.bind(this), 10000)
    
    this.props.firebase.locations().on('value', snapshot => { 
      const locationObject = snapshot.val();
 
      if (locationObject) {
        const locationList = Object.keys(locationObject).map(key => ({
          ...locationObject[key],
          uid: key,
        }));

        this.setState({ 
          locations: locationList,
          loading: false 
        });
      } else {
        this.setState({ messages: null, loading: false });
      }    });
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
