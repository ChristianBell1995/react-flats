import React, { Component } from 'react';
import Flat from './flat.jsx'

class FlatList extends Component {
  renderFlats = () => {
    return this.props.flats.map(({id, name, imageUrl, price, priceCurrency, lat, lng}) =>
      <Flat key={id}
            id={id}
            name={name}
            imageUrl={imageUrl}
            price={price}
            lat={lat}
            lng={lng}
            priceCurrency={priceCurrency}
            updateMarker={this.props.updateMarker} />
    )
  }

  render() {
    return(
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    )
  }
}

export default FlatList;
