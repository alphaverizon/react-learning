import React, { Component } from 'react';
import { graphql,compose  } from 'react-apollo';

import { getFireByMonth } from '../queries/queries';
import HeatMap from './heatmap';


class FireComponent extends Component {
    
    constructor(props){
        super(props);

        this.state={
            month:''
        };
    }

    getAllForestData(){
        var data = this.props.getFireByMonth;
        if(!data.loading)
        {
            return data.forestbymonth.map(forest => {
                return forest;
            })
        }
    }

    render(){
        return(
            <div>
                <HeatMap data={this.getAllForestData()}/>
            </div>
        );
    }
}

export default graphql(getFireByMonth, {
    name:'getFireByMonth',
    options: (props) => {
        return {
            variables: {
                month: 'oct'
            }
        }
    }
})(FireComponent);
