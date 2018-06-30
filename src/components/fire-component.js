import React, { Component } from 'react';

import HeatMap from './heatmap';


class FireComponent extends Component {
    
    constructor(props){
        super(props);

        this.state={
            month:''
        };
    }
    setButtonState(monthname){
        this.setState({ month:monthname.substr(0,3).toLowerCase()})
    }

    render(){
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        var self = this;
        return(
            <div>
                <HeatMap monthData={this.state.month}/>
                {   
                    monthNames.map(function(name, index){
                        return <button onClick={(e)=>
                            self.setButtonState(name)
                        } key={ index } >{name}</button>;
                     })
                }
            </div>
        );
    }
}

export default FireComponent;
