import React, { Component } from 'react';
import Marker from './marker.jsx'
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    }
  }

  updateCoordinates = () => {
    this.props.center.lat = this.props.lat
  }

  render() {
    return(
      <div className="map-container">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: ''}}
            defaultCenter={this.state.center}
            defaultZoom={11}
          >
            <Marker
              lat={this.props.lat}
              lng={this.props.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default MapComponent;
