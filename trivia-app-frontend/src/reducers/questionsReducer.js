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
                    questions: action.questions.map(question => (
                        Object.assign({}, question, {answers: [
                            {answer: question.correct_answer, isCorrect: true},
                            {answer: question.incorrect_answer_a, isCorrect: false},
                            {answer: question.incorrect_answer_b, isCorrect: false},
                            {answer: question.incorrect_answer_c, isCorrect: false},
                        ]}
                    ))),
                    loading: false
                }
            default:
                return state;
        }
}

export default questionsReducer;