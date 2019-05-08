import React, { Component } from 'react';
import FlatList from './flat_list.jsx'
import MapComponent from './map_component.jsx'
import FlatData from '../data/flat_data.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.flats = FlatData

    this.state = {
      lat: 59.95,
      lng: 30.33
    }
  }

  updateMarker = (id) => {
    console.log(id)
    debugger;
    // take the id of the flat from the flat list and then look for the lat and lng in 'this.flats'
    // then pass the lat and lng into the map component to update the lat and lng of the marker.
    this.setState({lat: this.lat, lng: this.lng})
    console.log(this.state.lat)
  }

  render() {
    return(
      <div>
        <FlatList flats={this.flats} updateMarker={this.updateMarker} />
        <MapComponent lat={this.state.lat} lng={this.state.lng} />
      </div>
    )
  }
}

export default App;
