export default function usersReducer(state = {
    users: [],
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
            return {
                ...state,
                currentUser: action.user
            }

        default:
            return state;
    }
}
