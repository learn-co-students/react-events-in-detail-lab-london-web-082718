// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist();  // allows you to access event data in an aynchornius manner + access the event again
    setTimeout( () => {
      this.props.onDelayedClick(event)
    }, // now give teh delay (i.e. second argument of setTimeout after the callback function)
    this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    )
  }

}
