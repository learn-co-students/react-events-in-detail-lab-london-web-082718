import React from 'react';

class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Button</button>
            </div>
        )
    }
}
export default CoordinatesButton;