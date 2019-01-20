import React, { Component } from "react";
import {subscribeToTimer} from '../actions/index';
import PieChart from 'react-minimal-pie-chart';
import LegendItem from './legenditem';

class Viz extends Component {
    constructor(props) {
        super(props);
        subscribeToTimer((err, data) => this.setState({ data }));
    }

    state = {data: []};



      render() {
        if (!this.props.visible){
            return null;
        }
        else {
        console.log(this.state.data);
		return (
            <div>
            <div className="legend-item-container">
                <LegendItem className="bot" color='#b0bec5' caption="Bots" count={this.state.data[0].value} />
                <LegendItem className="human" color='#607d8b' caption="Humans" count = {this.state.data[1].value} />
            </div>
            <PieChart
            data={this.state.data}
            startAngle={180}
            lengthAngle={180}
            animate
            />
            </div>
        );
        }
	}
}

export default Viz;