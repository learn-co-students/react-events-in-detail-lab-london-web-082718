// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    trucmuche = (event) => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }

    render() {
        return <button onClick={this.trucmuche}>Button 2</button>
    }
}
export default DelayedButton