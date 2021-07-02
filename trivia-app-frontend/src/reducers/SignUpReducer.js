// export default function SignUpReducer(state = {
//         username: [],
//         password: [],
//         users: [
//             { 
//                 username: "Will",
//                 score: 0
//              },
//             { 
//                 username: "Timothy",
//                 score: 0
//              }
//         ],
//         currentUser: {
//             username: '',
//             score: 0,
//         }
// }, action) {

//     switch (action.type) {
//         case 'ADD_USER':
//             console.log(state.users, action.user)
//         return state.users.concat(
//             {
//                 username: action.user.username,
//                 score: 0
//             }
//             )
//         // console.log({ username: state.username.concat(action.user.username)})
//         // console.log({ currentUser: {
//         //     ...state.currentUser,
//         //     username: action.user.username,
//         //     password: action.user.password
//         // }});
//         // return { 
//         //     username: state.username.concat(action.payload.username),
//         //     password: state.password.concat(action.payload.password),
//         //     currentUser: {
//         //         ...state.currentUser,
//         //         username: action.payload.username,
//         //         password: action.payload.password
//         //     }
//         // }
//         case 'LOGIN_USER':
//         // return {
//         //     loggedUser: state.users.find(user => {
//         //         return (
//         //             state.user.username === user.username
//         //         )
//         //     })
//         console.log()
//         console.log(state.users)
//             return {
//                 loggedUser: state

//             }

//         default:
//             return state;

//     }

// }

// const SignUpReducer = (state = {
//     users: [
//         {
//             username: 'Will',
//             score: 0
//         },
//         {
//             username: 'Timothy',
//             score: 0
//         }
//     ]
// }, action) => {

//     switch (action.type) {
//         case 'ADD_USER':
//            console.log(state.users, action.user)
//            return state.users.concat(
//                {
//                    username: action.user.username,
//                    score: 0
//                }
//            )
//            default:
//                return state;
//     }
// }

// export default SignUpReducer