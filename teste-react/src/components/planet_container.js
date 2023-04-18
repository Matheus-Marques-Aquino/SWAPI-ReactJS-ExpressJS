import React from 'react';

class PlanetContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let data = this.props.data;
        if (!data){ data = {}; }
        let name = (data.name) ? data.name : '';
        let diameter = (data.diameter) ? data.diameter : '';
        let rotation_period = (data.rotation_period) ? data.rotation_period : '';
        let orbital_period = (data.orbital_period) ? data.orbital_period : '';
        let gravity = (data.gravity) ? data.gravity : '';
        let climate = (data.climate) ? data.climate : '';
        let terrain = (data.terrain) ? data.terrain : '';
        let surface_water = (data.surface_water) ? data.surface_water : '';
        let population = (data.population) ? data.population : '';

        return (
        <div className="container_">
            <div className="name_">
                <span>• {name}</span>
            </div>
            <div style={{display: 'flex', marginBottom: '6px'}}>
                <div className="subcontainer_">
                    <span className="label_">diameter:</span>
                    <span className="info_">{diameter} km</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">rotation_period:</span>
                    <span className="info_">{rotation_period} hours</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">orbital_period:</span>
                    <span className="info_">{orbital_period} days</span>
                </div>                
                <div className="subcontainer_">
                    <span className="label_">gravity:</span>
                    <span className="info_">{gravity}</span>
                </div>   
            </div>
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <div className="subcontainer_">
                    <span className="label_">climate:</span>
                    <span className="info_">{climate}</span>
                </div>            
                <div className="subcontainer_">
                    <span className="label_">terrain:</span>
                    <span className="info_">{terrain}</span>
                </div>            
                <div className="subcontainer_">
                    <span className="label_">surface_water:</span>
                    <span className="info_">{surface_water}%</span>
                </div>            
                <div className="subcontainer_">
                    <span className="label_">population:</span>
                    <span className="info_">{population}</span>
                </div>    
            </div>
        </div>
        );
    }
}

export default PlanetContainer;