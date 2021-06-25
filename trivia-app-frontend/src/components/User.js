import React from 'react';
import { connect } from 'react-redux';

const User = ({ currentUser }) => {
    console.log(currentUser)
    // if (!username) {
    //     return;
    // }

    return (
        <div class='container'>
            <h2>Player Name: { currentUser.currentUser? currentUser.currentUser.username : null }</h2>
            <h3>Score: { currentUser.currentUser? currentUser.currentUser.score : null }</h3>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentUser: state.UsersReducer
    };
};

export default connect(mapStateToProps)(User)

// class User extends Component {

    

//     render() {
//         return (
//             <div class='container'>
//                 <h2>Player Name: </h2>
//                 <h3>Score: </h3>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         currentUser: state.UsersReducer.currentUser
//     }
// }

// export default connect(mapStateToProps)(User)