import React, { Component } from 'react';
import FlatList from './flat_list.jsx'
import GoogleMapReact from './google_map_react.jsx'
import FlatData from '../data/flat_data.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.flats = FlatData
  }

  render() {
    return(
      <div>
        <FlatList flats={this.flats} />
        <GoogleMapReact />
      </div>
    )
  }
}

export default App;
