export default function LoginReducer(
    state = {
        users: [ 
            {username: Will},
            {username: Tom}
        ],
        loggedUser: '',
    },
    action
) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                loggedUser: state.users.find(user => {
                    return (
                        state.user.username === user.username
                    )
                })
            }
        default:
            return state;
    }
}