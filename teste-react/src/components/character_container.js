import React from 'react';

class CharacterContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let data = this.props.data;
        if (!data){ data = {}; }
        let name = (data.name) ? data.name : '';
        let gender = (data.gender) ? data.gender : '';
        let height = (data.height) ? data.height : '';
        let mass = (data.mass) ? data.mass : '';
        let hair_color = (data.hair_color) ? data.hair_color : '';
        let skin_color = (data.skin_color) ? data.skin_color : '';
        let eye_color = (data.eye_color) ? data.eye_color : '';
        return (
        <div className="container_">
            <div className="name_">
                <span>• {name}</span>
            </div>
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <div className="subcontainer_">
                    <span className="label_">gender:</span>
                    <span className="info_">{gender}</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">height:</span>
                    <span className="info_">{height} cm</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">mass:</span>
                    <span className="info_">{mass} kg</span>
                </div>                            
                <div className="subcontainer_">
                    <span className="label_">hair_color:</span>
                    <span className="info_">{hair_color}</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">skin_color:</span>
                    <span className="info_">{skin_color}</span>
                </div>  
                <div className="subcontainer_">
                    <span className="label_">eye_color:</span>
                    <span className="info_">{eye_color}</span>
                </div>     
            </div>
        </div>);
    }
}

export default CharacterContainer;