const url = "http://localhost:4000"

export const addUser = user => {
    console.log(user)
    return (dispatch) => {
        let formData = { username: user.username, password: user.password, score: 0 }
        console.log(formData)
        fetch('http://localhost:4000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            dispatch({ type: 'LOGIN_USER', user})
        })
        
        // type: 'ADD_USER',
        // user
    }
}

export const login = user => {
    console.log(user)
    return (dispatch) => {
        fetch(url + '/users/' + user.username)
        .then(res => res.json())
        .then(user => {
            console.log(user)
            dispatch({ type: 'LOGIN_USER', user})
        })
    }
    
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_USERS_REQUEST'});
        fetch(url)
        .then(res => res.json())
        .then(users => {
            console.log(users)
            dispatch({ type: 'GET_USERS', users })
        })
    };
}