import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import User from './User';

const UserPage = ({ currentUser, history }) => {
    console.log(currentUser)

    // const activeUser = () => {
    //     console.log(currentUser)
    //     if (currentUser.username) {
            
    //         return (
                
    //         )
    //     }
    // }

    return (
        <div className='container'>
            <User />
                <div className='active-user-boiler'>
                <h3>Click Questions button above to start playing</h3>
                <Logout history={history} />
            </div>
        </div>
    ) 
}

const mapStateToProps = state => {
    return {
        currentUser: state.UsersReducer.currentUser
    };
};

export default connect(mapStateToProps)(UserPage);

//extra info and button for the user page