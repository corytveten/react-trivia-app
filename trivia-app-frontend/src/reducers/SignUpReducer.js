export default function SignUpReducer(state = {
        username: [],
        password: [],
        currentUser: {
            username: '',
            score: 0,
        }
}, action) {
    switch (action.type) {
        case 'ADD_USER':

        console.log({ username: state.username.concat(action.payload.username)})
        console.log({ currentUser: {
            ...state.currentUser,
            username: action.payload.username,
            password: action.payload.password
        }});
        return { 
            username: state.username.concat(action.payload.username),
            password: state.password.concat(action.payload.password),
            currentUser: {
                ...state.currentUser,
                username: action.payload.username,
                password: action.payload.password
            }
        };

        default:
            return state;

    }

}