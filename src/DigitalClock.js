import React, {Component} from 'react';
import './DigitalClock.css'

class DigitalClock extends Component {

    render() {
        return <h1 className="orange">{this.props.time}</h1>
    }

}

export default DigitalClock;