import React, { Component } from 'react';
import Letter from './Letter.js'


class Letters extends Component {

    render() {
        let lettersArray = Object.keys(this.props.letterStatus)
        return (
            <div className = "letters">
                <h3> Available Letters :</h3>
                {lettersArray.map(l => <Letter 
                    letter={l} 
                    selectLetter ={this.props.selectLetter}
                    key={l} 
                    className={this.props.letterStatus[l]? "selected" : "non-selected"}
                />)}
            </div>
        );
    }
}

export default Letters;