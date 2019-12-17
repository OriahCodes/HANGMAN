import React, { Component } from 'react';

class EndGame extends Component {
    render() {
        return (
            this.props.win === "win" ?
                <div>
                    <h1> Congradulations! </h1>
                    You are a winner 
                </div> :
                <div> 
                    <h1>Oish</h1>
                    You Lost. The secret word was: {this.props.word} 
                </div>
        );
    }
}

export default EndGame;