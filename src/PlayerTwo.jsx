import React from 'react';

class PlayerTwo extends React.Component {
    render(){
        return(
            <div>
                <br></br>
<div>Player 2</div>
<div>Name :{this.props.name}</div>
<div>Player number of times : 0 <button onClick={(e)=>this.props.Buttonclick(e)}>{this.props.isplaying ? "This player is playing now" : "Play"}</button></div>
</div>     
        )
    }
}

export default PlayerTwo