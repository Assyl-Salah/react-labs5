import React from 'react';

class PlayerTwo extends React.Component {
    render(){
        return(

            <div>
                <br></br>
<div>Player 2</div>
<div>Name :{this.props.name}</div>
<div>Player number of times : 0 <button>Play</button></div>
</div>
            
        )
    }
}

export default PlayerTwo