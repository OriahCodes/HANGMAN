export const addPoints = () => {
    return {
        type: 'ADD_POINTS',
    }
}

export const takeOffPoints = () => {
    return {
        type: 'TAKE_OFF_POINTS',
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    }
}

export const gameStatus = newStatus => {
    return {
        type: 'CHANGE_GAME_STATUS',
        payload: {
            status: newStatus
        }
    }
}

export const changeLetterStatus = (newStatus) => {
    return {
        type: 'CHANGE_LETTER_STATUS',
        payload: {
            letterStatus: newStatus
        }
    }
}

export const initLetterStatus = () => {
    return {
        type: 'INIT_LETTER_STATUS',
    }
}

export const chooseSolution = (num) => {
    return {
        type: 'CHOOSE_SOLUTION',
        payload:{
            numSolutions : num
        }
    }
}
