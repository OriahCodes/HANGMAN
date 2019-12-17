import React, { Component } from 'react';
import Letter from './Letter.js'

class Solution extends Component {

    render() {
        let wordArray = this.props.word.split("")
        return (
            <div>
                {wordArray.map( (w,index) => 
                    this.props.letterStatus[w] ?
                    <Letter letter={w} className="selected" key={index}/> : 
                    <Letter letter={" __ "} className="non-selected" key={index}/>
                )}
                <div className="hint">Hint: {this.props.hint}</div>               
            </div>
        );
    }
}

export default Solution;