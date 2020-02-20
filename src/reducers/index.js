import {combineReducers} from 'redux'
import scoreReducer from './score.js'
import gameStatusReducer from './gameStatus'
import letterStatusReducer from './letterStatus'
import randomSolutionReducer from './randomSolutionReducer'

const allReducers = combineReducers({
    score: scoreReducer,
    gameStatus: gameStatusReducer,
    letterStatus: letterStatusReducer,
    randomSolution: randomSolutionReducer
})

export default allReducers