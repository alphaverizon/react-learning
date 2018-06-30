import React,{ Component} from 'react';

import { graphql} from 'react-apollo';
import { getFireByMonth } from '../queries/queries';

import '../../node_modules/react-vis/dist/style.css';
import {XYPlot,XAxis,YAxis,HeatmapSeries} from 'react-vis';


class HeatMap extends Component {
    chart_data=null;

    getAllForestData(){
        var data = this.props.getFireByMonth;
        if(!data.loading)
        {   
            this.chart_data=[];
            data.forestbymonth.map(forest => {
                this.chart_data.push({x:forest.X, y:forest.Y,color:forest.temp});    
            });
        }
    }

    render(){
        this.getAllForestData();
        if(this.chart_data===null) 
            return null;

        return(
            <XYPlot
                width={600}
                height={400}>
                <XAxis />
                <YAxis />
                <HeatmapSeries
                    className="heatmap-series-example"
                    data={this.chart_data}
                />
            </XYPlot>

        );
    }
}

export default graphql(getFireByMonth, {
    name:'getFireByMonth',
    options: (props) => {
        return {
            variables: {
                month: props.monthData
            }
        }
    }
})(HeatMap);

