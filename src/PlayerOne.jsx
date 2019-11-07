import React from 'react';
class PlayerOne extends React.Component {

    render(){
        return(

           <div>
                <br></br>
<div>Player 1</div>
<div>Name :{this.props.name}</div>
<div>Player number of times : 0 <button>Play</button></div>
</div>
            
        )
    }
}

export default PlayerOne