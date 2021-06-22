export function fetchQuestions() {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_QUESTIONS_REQUEST'});
        fetch('http://localhost:4000/questions')
        .then(res => res.json())
        .then(questions => dispatch({ type: 'ADD_QUESTIONS', questions }))
    };
}