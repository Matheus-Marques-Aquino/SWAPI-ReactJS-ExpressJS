import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import FilmContainer from '../components/film_container';

class FilmsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            films: [],
            search: ''
        }
    }
    componentDidMount(){
        axios.post('http://localhost:4000/films',) 
        .then((res)=>{
            this.setState({ loading: false, films: res.data});
        });
    }
    inputHandler(event){
        let value = event.target.value;  
        this.setState({ search: value });        
    }
    searchRequest(){
        if (this.state.loading){ return; }
        this.setState({films: [], loading: true})
        axios.post('http://localhost:4000/films', { search: this.state.search })
        .then((res)=>{
            console.log(res);
            this.setState({loading: false, films: res.data});
        })
    }
    render(){
        let films = this.state.films;
        return(
        <div style={{display: 'flex', width: '100%'}}>
            <div style={{width: '100%', maxWidth: '1200px', margin: '15px auto 0 auto', backgroundColor: '#272B30', border: '1px solid #0B0C0E', borderRadius: '5px'}}>
                <div style={{display: 'flex', width: '100%', height: '140px', borderBottom: '1px solid #1C1E22'}}>
                    <span style={{fontSize: '32px', color: '#C8C8C8', margin: 'auto'}}>Exemplo - API Teste</span>                
                </div>
                <div style={{display: 'flex', width: '100%', maxWidth: '900px', height: '80px', margin: '0 auto', fontSize: '20px'}}>
                    <div style={{display: 'flex', width: '25%'}}>
                        <Link to='/characters' style={{margin: 'auto', paddingBottom: '2px', color: '#C8C8C8', borderBottom: '2px solid #272B30'}}>Personagens</Link>
                    </div>                    
                    <div style={{display: 'flex', width: '25%'}}>
                        <Link to='/planets' style={{margin: 'auto', paddingBottom: '2px', color: '#C8C8C8', borderBottom: '2px solid #272B30'}}>Planetas</Link>
                    </div>                   
                    <div style={{display: 'flex', width: '25%'}}>
                        <Link to='/starships' style={{margin: 'auto', paddingBottom: '2px', color: '#C8C8C8', borderBottom: '2px solid #272B30'}}>Naves</Link>
                    </div>                   
                    <div style={{display: 'flex', width: '25%'}}>
                        <div style={{margin: 'auto', paddingBottom: '2px', color: '#FFE312', borderBottom: '2px solid #FFE312'}}>Filmes</div>
                    </div>
                </div>
                <div style={{width: '100%', height: '40px', display: 'flex', color: '#C8C8C8', fontSize: '14px', borderTop: '1px solid #1C1E22'}}>
                    <span style={{margin: 'auto auto 0px 50px'}}>/films</span>                        
                    <span style={{margin: 'auto 50px 0px auto'}}>{films.length} Resultados</span>
                </div>
                <div style={{width: '100%', height: '80px', display: 'flex'}}>
                    <div style={{height: '30px', margin: 'auto 0 auto 50px', backgroundColor: '#777777', color: '#FFFFFF', display: 'flex', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderRight: '1px solid #888888', cursor: 'pointer'}} onClick={()=>{this.searchRequest()}}>
                        <span style={{padding: '0px 15px', margin: 'auto 0'}}>Buscar</span>
                    </div>
                    <input type="text" value={this.state.search} onChange={this.inputHandler.bind(this)} style={{width: '100%', maxWidth: '580px', height: '28px', margin: 'auto 50px auto 0px', padding: '0px 0px 0px 10px', border: '1px solid #CCC', borderTopRightRadius: '5px', borderBottomRightRadius: '5px', backgroundColor: '#FFF', color: '#3A3F44'}}/>
                    <select style={{height: '30px', padding: '0px 35px 0px 15px', margin: 'auto 50px auto auto', color: '#000000'}} disabled><option>Ordem cronológica</option></select>
                </div>
                <div style={{width: '100%', maxWidth: '1100px', height: '600px', margin: '15px auto 20px auto', backgroundColor: '#F7F7F7', border: '1px solid #CCC', borderRadius: '5px', overflow: 'auto', position: 'relative'}}>
                {films.map((film, i)=>{
                        return(<FilmContainer data={{title: film.title, director: film.director, producer: film.producer, release_date: film.release_date, opening_crawl: film.opening_crawl}}/>);
                    })}  
                    <div style={{width: 'fit-content', height: 'fit-content', position: 'absolute', top: '150px', left: '0px', right: '0px', margin: 'auto', display: (this.state.loading) ? 'block' : 'none'}}>Carregando...</div>
                                        
                </div> 
            </div>
        </div>
        );
    }
}

export default FilmsPage;