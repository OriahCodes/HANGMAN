const scoreReducer = (state = 100, {type}) => {
    switch (type){
        case 'TAKE_OFF_POINTS':
            return state - 20
        case 'ADD_POINTS':
           return state + 5
        case 'RESET':
            return 100
        default:
            return state
    }
}

export default scoreReducer