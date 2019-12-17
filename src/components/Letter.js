import React, { Component } from 'react';

class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter !== undefined && this.props.className!== "selected" ?
        this.props.selectLetter(this.props.letter) : console.log("stop your shananigans")
    }
    
    render() {
        return (
            <span className={this.props.className} onClick={this.selectLetter}> {this.props.letter} </span>
        );
    }
}

export default Letter;