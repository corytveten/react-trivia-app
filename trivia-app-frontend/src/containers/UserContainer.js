import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/users';

import Home from '../components/Home'
import User from '../components/User'
import Login from '../components/Login'
import Signup from '../components/Signup'



class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      console.log(this.props.users)
      return <UserPage />
    }
  }


    render() {
        return (
            <div className='users-container'>
                {!this.props.currentUser? <Login /> : null } 
                {/* <Signup /> */}
                <p>User: {this.handleLoading}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    users: state.UsersReducer,
    loading: state.UsersReducer.loading
  }
}

export default connect(mapStateToProps, { fetchUsers })(UserContainer);


  