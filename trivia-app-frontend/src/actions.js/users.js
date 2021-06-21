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