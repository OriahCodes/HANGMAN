import React, { Component } from 'react';

class NewGame extends Component {
    newGame(){
        this.props.newGame()
    }

    render() {
        return (
            <div>
                <button onClick={this.newGame}> Start New Game </button>
            </div>
        );
    }
}

export default NewGame;