const generateLetterStatus = () => {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
        letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
}


const letterStatusReducer = (state = generateLetterStatus(), { type, payload }) => {
    switch (type) {
        case 'CHANGE_LETTER_STATUS':
            return payload.letterStatus
        case 'INIT_LETTER_STATUS':
            return generateLetterStatus()
        default:
            return state
    }
}
export default letterStatusReducer
