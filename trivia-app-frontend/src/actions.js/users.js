export const addUser = user => {
    return {
        type: 'ADD_USER',
        user
    }
}

export const loginUser = user => {
    return {
        type: 'LOGIN_USER',
        user
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_USERS_REQUEST'});
        fetch('http://localhost:4000/users')
        .then(res => res.json())
        .then(users => {
            console.log(users)
            dispatch({ type: 'GET_USERS', users })
        })
    };
}