import React,{ Component} from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
    XYPlot, 
    XAxis,
    YAxis,
    HeatmapSeries,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries
} from 'react-vis';

class HeatMap extends Component {
    chart_data=null;

    componentWillMount(){
        console.log('component will mount-HeatMap');
    }

    componentWillReceiveProps(nextProps){
        var data=nextProps.data;  
        this.chart_data=[];

        for(let value in data){
            this.chart_data.push({x:data[value].X, y:data[value].Y,color:data[value].temp});
        }
    }
    
    componentDidUpdate(){
        console.log('component did update-HeatMap');    
    }

    render(){
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
                    data={this.chart_data}/>
                </XYPlot>

            );
    }
}

export default HeatMap;
