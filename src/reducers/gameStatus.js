const gameStatusReducer = (state = "playing", {type, payload}) => {
    switch (type){
        case 'CHANGE_GAME_STATUS':
            return payload.status
        default :
            return state
    }
}

export default gameStatusReducer