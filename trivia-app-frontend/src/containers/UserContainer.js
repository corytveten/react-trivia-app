import React, { Component } from 'react'

import Home from '../components/Home'
// import User from '../components/User'
import Login from '../components/Login'
import Signup from '../components/Signup'



class UserContainer extends Component {

    state = {
        username: '',
        password: ''
      }

    handleUsernameChange = event => {
        this.setState({
          username: event.target.value
        })
      }
    
    handlePasswordChange = event => {
        this.setState({
          password: event.target.value
        })
      }

    render() {
        return (
            <div>
                <Home />
                <Login handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} />
                <Signup handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} />
            </div>
        )
    }
}

export default UserContainer;
