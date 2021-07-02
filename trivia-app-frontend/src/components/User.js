import React from 'react';
import { connect } from 'react-redux';
import Score from './Score'
// import Logout from './Logout'

const User = ({ currentUser }) => {
    console.log(currentUser)


// const activeUser = () => {
//     if (currentUser.currentUser) {
//         return (
//             <div className='active-user-boiler'>
//                 <h3>Click Questions button above to start playing</h3>
//                 <Logout />
//             </div>
//         )
//     }
// }
    return (
        <div className='player-container'>
            <h1>Now Playing: { currentUser.currentUser? currentUser.currentUser.username : null }</h1>
            <Score />
            {/* {activeUser()} */}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentUser: state.UsersReducer
    };
};

export default connect(mapStateToProps)(User)

