import React from 'react';


class DelayedButton extends React.Component {
    
    handleClick = (event) => {
      event.persist();
      setTimeout(() => {
        this.props.onDelayedClick(event);
      }, this.props.delay);
    }

    render(){
        return(
              <div>
                <button onClick={this.handleClick}>Button 2</button>
            </div>
        )
    }
}
export default DelayedButton;