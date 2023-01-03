import React from 'react';

class Item extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      clicks:0
    }
  }

  clickMe(){
     this.setState({
      clicks: this.state.clicks + 1
     })
  }


  render() {
    return(
      <div>
       <p onClick={()=> this.clickMe()}>
          This is {this.props.name}
       </p>
       <span>{this.state.clicks} is the number of clicks</span>
      </div>
     

    )
  }
}


export default Item;