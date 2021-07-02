export function fetchQuestions() {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_QUESTIONS_REQUEST'});
        fetch('http://localhost:4000/questions')
        .then(res => res.json())
        .then(questions => {
            // console.log(questions)
            dispatch({ type: 'ADD_QUESTIONS', questions })
        })
    };
}

//dispatch method comes from the store
//action, consisting of type and payload, is dispatched to the reducer, where state will be modified
//thunk allows us to return a function inside the action creator. Single fetchQuestions function contains two actions.