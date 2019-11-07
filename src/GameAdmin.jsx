import React from 'react';
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

    class GameAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name1: '',
            name2: '',
            score1:0 ,
            score2:0,
            isactivePlayer1 : false,
            isactivePlayer2 : false
        };
    //  this.name1handler.bind(this);
   //   this.name2handler.bind(this);
   //    this.Button1click=this.Button1click.bind(this);
      // this.button2click=this.Button2click.bind(this);
    }

name1handler=(event)=>{
 this.setState({name1: event.target.value})
    
}
name2handler=(event)=>{
   this.setState({name2: event.target.value})
    
} 
button1click=(event)=>
{
 if(!this.state.isactivePlayer1)
 {
     this.setState({isactivePlayer1:true , isactivePlayer2:false , score1:this.state.score1 +1});
 }
}
button2click=(event)=>
{
    if(!this.state.isactivePlayer2)
    {
        this.setState({isactivePlayer2:true , isactivePlayer1:false , score2:this.state.score2 +1});
    }
}
    render(){
    return(
    <div className="clas1">
        <fieldset>
    <PlayerOne name={this.state.name1} 
    isplaying={this.state.isactivePlayer1}
    Buttonclick={this.button1click}
    times={this.state.score1} />
        </fieldset>
        <br></br>
     <fieldset>     
    <PlayerTwo name={this.state.name2} 
    isplaying={this.state.isactivePlayer2}
    Buttonclick={this.button2click}
    times={this.state.score2}/> </fieldset>
    <br></br>
    <p> Set Name of Player One :
    <input 
    onChange={this.name1handler} />
    <br></br>
    <br>
    </br>
    </p>
    <p> Set Name of Player Two :
    <input
  onChange={this.name2handler} />
    </p>
    </div>
    )
    }
    
    }
    export default GameAdmin
