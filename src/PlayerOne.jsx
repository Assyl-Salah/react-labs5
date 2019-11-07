import React from 'react';
class PlayerOne extends React.Component {

    render(){
        return(

           <div>
                <br></br>
<div>Player 1</div>
<div>Name :{this.props.name}</div>
<div>Player number of times :{this.props.times}<button onClick={(e)=>this.props.Buttonclick(e)}>{this.props.isplaying ? "This user is playing now" : "Play"}</button></div>
</div>
        )
    }
}

export default PlayerOne