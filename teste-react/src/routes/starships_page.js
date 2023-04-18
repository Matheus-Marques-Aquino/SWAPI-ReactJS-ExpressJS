import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import StarshipContainer from '../components/starship_container';

class StarshipsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            starships: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/starships',) 
        .then((res)=>{
            this.setState({ loading: false, starships: res.data});
        });
    }

    render() {
        let starships = this.state.starships;
        return(
        <div style={{display: 'flex', width: '100%'}}>
            <div style={{width: '100%', maxWidth: '1200px', margin: '10px auto 0 auto', backgroundColor: '#272B30', border: '1px solid #0B0C0E', borderRadius: '5px'}}>
                <div style={{display: 'flex', width: '100%', height: '110px', borderBottom: '1px solid #1C1E22'}}>
                    <span style={{fontSize: '32px', color: '#C8C8C8', margin: 'auto'}}>Exemplo - API Teste</span>                
                </div>
                <div style={{display: 'flex', width: '100%', maxWidth: '900px', height: '80px', margin: '0 auto', fontSize: '20px'}}>
                    <div style={{display: 'flex', width: '25%'}}>
                        <div style={{margin: 'auto', paddingBottom: '2px', color: '#FFE312', borderBottom: '2px solid #FFE312'}}>Personagens</div>
                    </div>                    
                    <div style={{display: 'flex', width: '25%'}}>
                        <Link to='/planets' style={{margin: 'auto', paddingBottom: '2px', color: '#C8C8C8', borderBottom: '2px solid #272B30'}}>Planetas</Link>
                    </div>                   
                    <div style={{display: 'flex', width: '25%'}}>
                        <Link to='/starships' style={{margin: 'auto', paddingBottom: '2px', color: '#C8C8C8', borderBottom: '2px solid #272B30'}}>Naves</Link>
                    </div>                   
                    <div style={{display: 'flex', width: '25%'}}>
                        <Link to='/films' style={{margin: 'auto', paddingBottom: '2px', color: '#C8C8C8', borderBottom: '2px solid #272B30'}}>Filmes</Link>
                    </div>
                </div>
                <div style={{width: '100%', height: '40px', display: 'flex', color: '#C8C8C8', fontSize: '14px', borderTop: '1px solid #1C1E22'}}>
                    <span style={{margin: 'auto auto 0px 50px'}}>/starships</span>                        
                    <span style={{margin: 'auto 50px 0px auto'}}>{starships.length} Resultados</span>
                </div>
                <div style={{width: '100%', height: '80px', display: 'flex'}}>
                    <div style={{height: '30px', margin: 'auto 0 auto 50px', backgroundColor: '#777777', color: '#FFFFFF', display: 'flex', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderRight: '1px solid #3E4145'}}>
                        <span style={{padding: '0px 15px', margin: 'auto 0', color: '#3E4145'}}>Buscar</span>
                    </div>
                    <input type="text" style={{width: '100%', maxWidth: '580px', height: '30px', margin: 'auto 50px auto 0px', padding: '0px 0px 0px 10px', border: '0px', borderTopRightRadius: '5px', borderBottomRightRadius: '5px', backgroundColor: '#8A8C8E', color: '#3A3F44'}} disabled/>
                    <select style={{height: '30px', padding: '0px 35px 0px 15px', margin: 'auto 50px auto auto', color: '#000000'}} disabled><option>Ordem alfabética</option></select>
                </div>
                <div style={{width: '100%', maxWidth: '1100px', height: '600px', margin: '15px auto 20px auto', backgroundColor: '#F7F7F7', border: '1px solid #CCC', borderRadius: '5px', overflow: 'auto', position: 'relative'}}>
                    {starships.map((starship, i)=>{
                        return(
                        <StarshipContainer data={{ 
                            name: starship.name, 
                            model: starship.model, 
                            manufacturer: starship.manufacturer, 
                            starship_className: starship.starship_className, 
                            length: starship.length, 
                            mglt: starship.mglt, 
                            hyperdrive_rating: starship.hyperdrive_rating, 
                            max_atmosphering_speed: starship.max_atmosphering_speed, 
                            cargo_capacity: starship.cargo_capacity, 
                            consumables: starship.consumables, 
                            crew: starship.crew, 
                            passengers: starship.passengers, 
                            cost_in_credits: starship.cost_in_credits, 
                        }}/>);
                    })}   
                    <div style={{width: 'fit-content', height: 'fit-content', position: 'absolute', top: '150px', left: '0px', right: '0px', margin: 'auto', display: (this.state.loading) ? 'block' : 'none'}}>Carregando...</div>                                     
                </div> 
            </div>
        </div>
        );
    }
}

export default StarshipsPage;
