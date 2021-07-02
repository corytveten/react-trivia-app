const url = "http://localhost:4000"


export const addUser = (user, history) => {
    console.log(user, history)
    return (dispatch) => {
        let formData = { ...user, score: 0}
        console.log(formData)
        fetch('http://localhost:4000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            dispatch({ type: 'LOGIN_USER', user})
            history.push('/user')
        })
        .catch(error => {
            alert('This username may already exist.')
        })
    }
}

export const login = (user, history) => {
    console.log(user, history)
    return (dispatch) => {
        const configObj = {
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
            if (user.username) {
                history.push('/user')
            }
        })
        .catch(error => {
            alert('Incorrect credentials.')
            if (error) {
                return
            }
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

export const logout = (history) => {
    console.log('inside logout action')
    
    return (dispatch) => {

        dispatch({ type: 'LOGOUT'})
        history.push('/login')
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return fetch(url + '/logout', configObj)
        
        }
        
}