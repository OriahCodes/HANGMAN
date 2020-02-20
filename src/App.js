import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import EndGame from './components/EndGame'

import { addPoints, takeOffPoints, reset, gameStatus, initLetterStatus, changeLetterStatus, chooseSolution} from './actions'
import { connect } from 'react-redux'

const solutions = [
  {
    word: "PHILLY",
    hint: "She is blond and cute and likes to poop alot. Also, she used to be a puppy once"
  },
  {
    word: "CHEESE",
    hint: "It's usually yellow. Oh, and it smells like cheese"
  },
  {
    word: "PIKACHU",
    hint: "It can only say 'Pika!'. It's a Pokemon."
  }
]

class App extends Component {

  componentWillReceiveProps = (props,state) => {
    debugger
    if (props.score && (props.score !== state.score)){

    }
  }

  newGame = () => {
    this.props.resetScore()
    this.props.changeGameStatus("playing")
    this.props.initLettersObj()
    this.props.chooseSolutionNum(solutions.length)
  }

  checkSolution(letter) {
    if (solutions[this.props.randomSolution].word.indexOf(letter) > -1) {
      return true
    }
    return false
  }

  selectLetter = (letter) => {
    let letterStatus = this.props.letterStatus
    letterStatus[letter] = true
    this.props.changeLettersObj(letterStatus)

    if (this.checkSolution(letter)) {
      this.addPoints()
    }
    else {
      this.takeOffPoints()
    }

  }

  takeOffPoints () {
    this.props.onTakeOffPoints()
    this.checkScore(-20)
  }

  addPoints() {
    this.props.onAddPoints()
    this.checkVictory()
  }

  checkScore(addedPoints) {
    if (this.props.score + addedPoints <= 0) { 
      this.props.changeGameStatus("lose")
    }
  }

  checkVictory() { // I really want to think how to do this with o1
    let word = solutions[this.props.randomSolution].word.split("")
    for (let letter of word) {
      if (!this.props.letterStatus[letter]) { return false }
    }
    this.props.changeGameStatus("win")
    return true
  }

  getScoreLevel = () => {
    if (this.props.score >= 80) {
      return "high-score"
    }
    else if (this.props.score < 80 && this.props.score >= 50) {
      return "medium-score"
    }
    else {
      return "low-score"
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.gameStatus === "playing" ?
          <div>
            <Score
              score={this.props.score}
              scoreLevel={this.getScoreLevel()} />
            <Solution
              word={solutions[this.props.randomSolution].word}
              hint={solutions[this.props.randomSolution].hint}
              letterStatus={this.props.letterStatus} />
            <Letters
              letterStatus={this.props.letterStatus}
              selectLetter={this.selectLetter} />
          </div> :
          <div>
            <EndGame win={this.props.gameStatus} word={solutions[this.props.randomSolution].word} />
          </div>}

        <div className="new-game">
          <button onClick={this.newGame}>Start New Game</button>
        </div>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    score: state.score,
    gameStatus: state.gameStatus,
    letterStatus: state.letterStatus,
    randomSolution: state.randomSolution
  }
}

const mapActionsToProps = {
  onAddPoints: addPoints,
  onTakeOffPoints: takeOffPoints,
  resetScore : reset,
  changeGameStatus : gameStatus,
  initLettersObj : initLetterStatus,
  changeLettersObj : changeLetterStatus,
  chooseSolutionNum : chooseSolution
}

export default connect(mapStateToProps, mapActionsToProps)(App)
