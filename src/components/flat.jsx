import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    this.props.updateMarker(event.target.id)
  }

  render() {
    const { id, name, price, priceCurrency, imageUrl } = this.props
    return (
      <div className="card" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="card-category">{price}{priceCurrency}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" id={id} onClick={this.handleClick}></a>
      </div>
    )
  }
}

export default Flat;
