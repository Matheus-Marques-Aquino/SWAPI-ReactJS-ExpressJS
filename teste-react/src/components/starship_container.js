import React from 'react';

class StarshipContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let data = this.props.data;
        if (!data){ data = {}; }
        let name = (data.name) ? data.name : '';
        let model = (data.model) ? data.model : '';
        let manufacturer = (data.manufacturer) ? data.manufacturer : '';
        let starship_className = (data.starship_className) ? data.starship_className : '';
        let length = (data.length) ? data.length : '';
        let mglt = (data.mglt) ? data.mglt : '';
        let hyperdrive_rating = (data.hyperdrive_rating) ? data.hyperdrive_rating : '';
        let max_atmosphering_speed = (data.max_atmosphering_speed) ? data.max_atmosphering_speed : '';
        let cargo_capacity = (data.cargo_capacity) ? data.cargo_capacity : '';
        let consumables = (data.consumables) ? data.consumables : '';
        let crew = (data.crew) ? data.crew : '';
        let passengers = (data.passengers) ? data.passengers : '';
        let cost_in_credits = (data.cost_in_credits) ? data.cost_in_credits : '';


        return (
        <div className="container_">
            <div className="name_">
                <span>• {name}</span>
            </div>
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <div className="subcontainer_">
                    <span className="label_">model:</span>
                    <span className="info_">{model}</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">manufacturer:</span>
                    <span className="info_">{manufacturer}</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">starship_className:</span>
                    <span className="info_">{starship_className}</span>
                </div>               
                <div className="subcontainer_">
                    <span className="label_">length:</span>
                    <span className="info_">{length} m</span>
                </div>   
            </div>
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <div className="subcontainer_">
                    <span className="label_">MGLT:</span>
                    <span className="info_">{mglt}</span>
                </div> 
                <div className="subcontainer_">
                    <span className="label_">hyperdrive_rating:</span>
                    <span className="info_">{hyperdrive_rating}</span>
                </div> 
                <div className="subcontainer_">
                    <span className="label_">max_atmosphering_speed:</span>
                    <span className="info_">{max_atmosphering_speed}</span>
                </div> 
                <div className="subcontainer_">
                    <span className="label_">cargo_capacity:</span>
                    <span className="info_">{cargo_capacity} kg</span>
                </div> 
                <div className="subcontainer_">
                    <span className="label_">consumables:</span>
                    <span className="info_">{consumables}</span>
                </div>     
            </div>
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <div className="subcontainer_">
                    <span className="label_">crew:</span>
                    <span className="info_">{crew}</span>
                </div> 
                <div className="subcontainer_">
                    <span className="label_">passengers:</span>
                    <span className="info_">{passengers}</span>
                </div> 
                <div className="subcontainer_">
                    <span className="label_">cost_in_credits:</span>
                    <span className="info_">{cost_in_credits} galact credits</span>
                </div>
            </div>                        
        </div> 
        );
    }
}

export default StarshipContainer;