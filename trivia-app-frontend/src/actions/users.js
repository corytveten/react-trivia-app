const url = "http://localhost:4000"

export const addUser = user => {
    console.log(user)
    return (dispatch) => {
        let formData = { username: user.username, password: user.password, score: 0 }
        console.log(formData)
        fetch('http://localhost:4000/users', {
            // credentials: 'include',
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            dispatch({ type: 'LOGIN_USER', user})
        })
    }
}

export const login = (user, history) => {
    console.log(user, history)
    return (dispatch) => {
        const configObj = {
            // credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        return fetch(url + '/login', configObj)
        .then(res => res.json())
        .then(user => {
            console.log(user)
            dispatch({ type: 'LOGIN_USER', user})
            history.push('/user')
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

export const increaseScore = () => {
    console.log('inside increase')
    return (dispatch) => {
        dispatch({ type: 'INCREASE_SCORE' })
    }
}

export const increaseCounter = () => {
    return { type: 'INCREASE_COUNTER' }
}

export const logout = () => {
    console.log('inside logout action')
    return (dispatch) => {

        dispatch({ type: 'LOGOUT'})
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return fetch(url + '/logout', configObj)
        }
}