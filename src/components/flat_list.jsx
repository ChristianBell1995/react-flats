import React, { Component } from 'react';
import Flat from './flat.jsx'

class FlatList extends Component {
  renderFlats = () => {
    return this.props.flats.map(({id, name, imageUrl, price, priceCurrency, lat, lng}) =>
      <Flat key={id} name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} lat={lat} lng={lng} />
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
