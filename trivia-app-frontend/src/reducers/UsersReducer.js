const initialState = {
    users: [],
    currentUser: '',
    counter: 0,
    requesting: false,
}

export default function usersReducer(state = initialState, action) {
    
    switch (action.type) {

        case 'START_ADDING_USERS_REQUEST':
            return {
                ...state,
                users: [...state.users],
                loading: true
            }


        case 'GET_USERS':
            return {
                ...state,
                users: action.users.map(user => (
                    Object.assign({}, user, {isLoggedIn: false})
                )),
                loading: true
            }


        case 'ADD_USER':
            return action.payload


        case 'LOGIN_USER':
            console.log('logging in user')
            console.log(action.user)
            return {
                ...initialState,
                currentUser: action.user,
            }

        case 'INCREASE_SCORE':
            console.log('increasing score reducer')
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    score: state.currentUser.score + 1
                }
            }

        case 'INCREASE_COUNTER':
            console.log('increasing counter reducer')
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'LOGOUT':
            console.log('logging out reducer')
            return {
                initialState
            }

        default:
            return state;
    }
}
