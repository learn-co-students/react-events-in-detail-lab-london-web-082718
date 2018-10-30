// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinateButtons extends Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Coordinates B****
        </button>
       </div>
    )
  } 

} 