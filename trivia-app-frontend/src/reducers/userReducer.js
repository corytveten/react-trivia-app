export default function userReducer(state = {
        username: '',
        password: '',
        currentUser: '',
}, action) {

    console.log('userReducer triggered');

    return state;
}