import React from 'react';
import FilmItemRow from './FilmItem.js';

class StarWars extends React.Component{
    constructor(){
      super()
      this.state={
        loadedCharacter: false,
        name: null,
        height: null,
        homeworld: null,
        films: []
      }
    }
    getNewCharacter(){
      const randomNumber = Math.round(Math.random()*82)
      const url = `https://swapi.dev/api/people/${randomNumber}/`
      fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        films: data.films,
        loadedCharacter: true,
  
      })
    })
      
  
    }
    render(){
  
      const movies = this.state.films.map((url, i)=>{
        return <FilmItemRow key={i} url={url} />
      })
      return(
        <div>
          {  
            this.state.loadedCharacter &&
             <div>
                <h1>{this.state.name}</h1>
                <p>Height: {this.state.height} cm</p>
                <p>HomeWorld: <a href={this.state.homeworld}>{this.state.homeworld}</a></p>
                <ul>
                 {movies}
                </ul>
              </div>
            
          }
          
          <button 
          type="button" 
          onClick={()=>this.getNewCharacter()}
          className="btn">
            Randomize Character
          </button>
        </div>
      )
    }
  
  }
  export default StarWars;