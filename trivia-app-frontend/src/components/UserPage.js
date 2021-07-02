import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import User from './User';
import { NavLink } from 'react-router-dom';

const UserPage = ({ currentUser, history }) => {
    console.log(currentUser)


    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white',
        borderRadius: '25px',
      }

    return (
        <div className='container'>
            <div className='user-container'>
                <User />
                <div className='active-user-boiler'>
                <h3>Click Questions button above to start playing</h3>
                <NavLink
                    to="/questions"
                    exact
                    className='link-btn'
                    activeStyle={{
                    background: 'darkblue'
                    }}
                    >Questions</NavLink>
                <Logout history={history} />
                </div>
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