function questionsReducer(state = { 
    questions: [],
    requesting: false 
    }, action) {
        switch (action.type) {

            case 'START_ADDING_QUESTIONS_REQUEST':
                return {
                    ...state,
                    questions: [...state.questions],
                    requesting: true
                }
            
            case 'ADD_QUESTIONS':
                return {
                    ...state,
                    questions: action.questions,
                    requesting: false
                }
            default:
                return state;
        }
}

export default questionsReducer;