import React, {Component} from "react";
import {GoogleApiWrapper, InfoWindow, Map, Marker} from "google-maps-react";
import Box from "@material-ui/core/Box";

const mapStyles = [
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];

export class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers: [],
      initStyle: {
        zoom: 4,
        center: {
          lat: 39.5,
          lng: -98.35
        }
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.locations.length !== prevProps.locations.length) {
      this.MarkerUpdater();
    }
  }

  componentDidMount() {
    this.MarkerUpdater();
  }

  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyles
    });
  }


  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  MarkerUpdater = () => {
    let markerArr = this.props.locations.map((location, index) =>
      <Marker
        key={`marker-${index}`}
        onClick={this.onMarkerClick}
        name={location.type}
        position={{
          lat: location.latitude,
          lng: location.longitude
        }}
      />
    );
    markerArr.push(<Marker
      key={"marker-home"}
      onClick={this.onMarkerClick}
      name={"Home Address"}
      position={{
        lat: this.props.home.geometry.location.lat,
        lng: this.props.home.geometry.location.lng
      }}
    />);
    this.setState({markers: markerArr});
  };

  render() {
    return (
      <Box
        width={1}
        height={400}
      >
        <Map
          google={this.props.google}
          zoom={this.state.markers.length === 0 ? this.state.initStyle.zoom : 8}
          containerStyle={{position: "relative"}}
          center={this.state.markers.length === 0 ? this.state.initStyle.center : {
            lat: this.props.home.geometry.location.lat,
            lng: this.props.home.geometry.location.lng
          }}
          initialCenter={this.state.initStyle.center}
          onClick={this.onMapClicked}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
          {this.state.markers}
          <InfoWindow
            key={"info-window"}
            google={this.props.google}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <p style={{color: "black"}}>{this.state.selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      </Box>
    );
  }
}

export default GoogleApiWrapper({apiKey: process.env.REACT_APP_GOOGLE_API_KEY})(GoogleMaps);