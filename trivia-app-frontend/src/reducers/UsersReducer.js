export default function usersReducer(state = {
    users: [],
    currentUser: { score: 0 },
    requesting: false,
    }, 
    action) {
    
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
            return {
                ...state,
                currentUser: action.user
            }

        case 'INCREASE_SCORE':
            console.log('increasing score reducer')
            return {
                ...state,
                currentUser: {
                    score: state.currentUser.score + 1
                }
            }

        // case 'SAY_HELLO':
        //     console.log('hello second')

        default:
            return state;
    }
}
