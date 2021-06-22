function questionsReducer(state = { 
    questions: [],
    requesting: false 
    }, action) {
        switch (action.type) {

            case 'START_ADDING_QUESTIONS_REQUEST':
                return {
                    ...state,
                    questions: [...state.questions],
                    loading: true
                }
            
            case 'ADD_QUESTIONS':
                return {
                    ...state,
                    questions: action.questions,
                    loading: false
                }
            default:
                return state;
        }
}

export default questionsReducer;