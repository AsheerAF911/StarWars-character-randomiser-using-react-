import React from 'react';


class StarWars extends React.Component{
    constructor(){
      super()
      this.state={
        loadedCharacter: false,
        image: null,
        name: null,
        height: null,
        homeworld: null,
        
      }
    }
    getNewCharacter(){
      const randomNumber = Math.round(Math.random()*82)
      const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
      fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({
            name: data.name,
            image: data.image,
            height: data.height,
            homeworld: data.homeworld,
            loadedCharacter: true,
            
        
  
      })
    })
      
  
    }
    render(){
  
      
      return(
        <div>
          {  
            this.state.loadedCharacter &&
             <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.image} className='image'></img>
                <p>Height: {this.state.height} cm</p>
                <p>HomeWorld: {this.state.homeworld}</p>
                
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