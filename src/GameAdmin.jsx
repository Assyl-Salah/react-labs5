import React from 'react';
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

    class GameAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name1: '',
            name2: '',
            player1score : 0,
            player2score :0
        };
      //  this.name1handler.bind(this);
    }

name1handler(event){
 this.setState({name1: event.target.value})
    
}
name2handler(event){
   this.setState({name2: event.target.value})
    
} 
    
    render(){
    return(
    <div className="clas1">
        <fieldset>
    <PlayerOne/>
        </fieldset>
        <br></br>
        <fieldset>
            
    <PlayerTwo/> </fieldset>
    <br></br>

    <p> Set Name of Player One :
    <input value
    type='String'
    onChange={this.name2handler} />
    
    <br></br>
    <br>
    </br>
    </p>

    <p> Set Name of Player Two :
    <input
    type='String'
  onChange={this.name2handler} />


    </p>
    </div>
    )
    }
    
    }
    export default GameAdmin
