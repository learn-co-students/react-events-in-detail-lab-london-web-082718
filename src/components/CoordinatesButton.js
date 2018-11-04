// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    // onReceiveCoordinates = (stuffA, stuffB) => {
    //     let arr = [stuffA, stuffB]
    //     console.log(arr)
    // }

    handleCoordonates = (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}

    render() {
        return (
            <div>
                <button onClick={this.handleCoordonates}>Button</button>
            </div>
        )
    }
}

export default CoordinatesButton