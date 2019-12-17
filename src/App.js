import React ,{Component} from 'react';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import EndGame from './components/EndGame'


class App extends Component {

  constructor(){
    super()
    this.state = {
      letterStatus: this.generateLetterStatus(),
      solutions: [
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
      ],
      randomSolution : this.chooseSolution(),
      score: 100,
      gameStatus: "playing"
    }

  }

  newGame = () => {
    let score = 100
    this.setState({
      score : score,
      letterStatus : this.generateLetterStatus(),
      gameStatus: "playing",
      randomSolution : this.chooseSolution()
    })
  }

  generateLetterStatus () {
    let letterStatus = {}
    for (let i= 65; i < 91; i ++){
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  chooseSolution = () => {
    let solutionInd = Math.floor(Math.random() * 3) //sohuld mwke this dynamic
    return solutionInd
  }

  checkSolution (letter) {
    if (this.state.solutions[this.state.randomSolution].word.indexOf(letter) > -1){
      return true
    }
    return false
  }

  selectLetter = (letter) => {
    let letterStatus = this.state.letterStatus
    letterStatus[letter] = true
    this.setState({ letterStatus})

    if (this.checkSolution(letter)){
      this.addPoints()
    }
    else{
      this.takeOffPoints()
    }

  }

  takeOffPoints(){
    this.setState({score : this.state.score - 20}, () => {
      this.checkScore() 
    })
  }

  addPoints(){
    this.setState({score : this.state.score + 5}, () => {
      this.checkVictory()
    })
  }

  checkScore(){
    if(this.state.score <= 0) {this.setState ({gameStatus : "lose"}) }
  }

  checkVictory(){ // I really want to think how to compute this with o1
    let word = this.state.solutions[this.state.randomSolution].word.split("")
    for (let letter of word){
      if (!this.state.letterStatus[letter]) { return false}
    }
    this.setState({gameStatus : "win"}) 
    return true
  }

  getScoreLevel = () => {
    if (this.state.score >= 80){
      return "high-score"
    }
    else if (this.state.score <80 && this.state.score >=50){
      return "medium-score"
    }
    else{
      return "low-score"
    }
  }

  render(){
    return (
      <div>
        {this.state.gameStatus === "playing"?      
        <div>
          <Score 
            score={this.state.score} 
            scoreLevel={this.getScoreLevel()}/>
          <Solution 
            word={this.state.solutions[this.state.randomSolution].word} 
            hint={this.state.solutions[this.state.randomSolution].hint} 
            letterStatus={this.state.letterStatus}/>
          <Letters 
            letterStatus={this.state.letterStatus} 
              selectLetter={this.selectLetter}/>
        </div> :
        <div>
          <EndGame win={this.state.gameStatus} word={this.state.solutions[this.state.randomSolution].word}/>
        </div>}

        <div className="new-game">
          <button onClick={this.newGame}>Start New Game</button>
        </div>
      </div>

    )
  }

}

export default App;
