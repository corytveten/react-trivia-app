import React from 'react';
import { connect } from 'react-redux';
import Score from './Score'

const User = ({ currentUser }) => {
    console.log(currentUser)
    // if (!username) {
    //     return;
    // }

    return (
        <div className='container'>
            <h2>Now Playing: { currentUser.currentUser? currentUser.currentUser.username : null }</h2>
            <Score />
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