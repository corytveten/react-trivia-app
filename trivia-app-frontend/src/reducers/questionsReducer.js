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
                    // questions: {
                    //     ...action.questions,
                    //     answers: [
                    //         action.questions.correct_answer,
                    //         action.questions.incorrect_answer_a,
                    //         action.questions.incorrect_answer_b,
                    //         action.questions.incorrect_answer_c,
                    //     ]
                    // },
                    //reshaping the data so that I can randomize the correct answer in an array before rendering.
                    questions: action.questions.map(question => (
                        Object.assign({}, question, {answers: [
                            {correct: question.correct_answer},
                            {incorrect: question.incorrect_answer_a},
                            {incorrect: question.incorrect_answer_b},
                            {incorrect: question.incorrect_answer_c},
                        ]}
                    ))),
                    loading: false
                }
            default:
                return state;
        }
}

export default questionsReducer;