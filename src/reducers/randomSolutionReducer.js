const chooseSolution = (num) => {
    let solutionInd = Math.floor(Math.random() * num)
    return solutionInd
}

let solutionInd = chooseSolution(3)

const randomSolutionReducer = (state = solutionInd, { type, payload }) => {
    switch (type) {
        case 'CHOOSE_SOLUTION':
            return chooseSolution(payload.numSolutions)
        default:
            return state
    }
}

export default randomSolutionReducer