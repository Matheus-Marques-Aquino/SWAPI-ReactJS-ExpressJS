import React from 'react';

class CharacterContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let data = this.props.data;
        if (!data){ data = {}; }
        let title = (data.title) ? data.title : '';
        let director = (data.director) ? data.director : '';
        let producer = (data.producer) ? data.producer : '';
        let release_date = (data.release_date) ? data.release_date : '';
        let opening_crawl = (data.opening_crawl) ? data.opening_crawl : '';

        return (
        <div className="container_">
            <div className="name_">
                <span>• {title}</span>
            </div>
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <div className="subcontainer_">
                    <span className="label_">director:</span>
                    <span className="info_">{director}</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">producer:</span>
                    <span className="info_">{producer}</span>
                </div>
                <div className="subcontainer_">
                    <span className="label_">release_date:</span>
                    <span className="info_">{release_date}</span>
                </div>      
            </div>
            <div style={{marginBottom: '10px'}}>
                <div style={{fontSize: '14px'}}>
                    <div style={{fontSize: '13px', fontWeight: 'bold', paddingBottom: '5px'}}>opening_crawl:</div>
                    <div>{opening_crawl}</div>
                </div>
            </div>
        </div>);
    }
}

export default CharacterContainer;