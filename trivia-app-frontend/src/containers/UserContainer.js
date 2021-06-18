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

    handleLoginSubmit = event => {
        event.preventDefault()
        let formData = { username: this.state.username, password: this.state.password }
        console.log(formData)
        fetch('http://localhost:4000/users')
        .then(res => res.json())
        .then(data => console.log(data))
        // fetch('http://localhost:4000/users', {
        //   method: "POST",
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(formData)
        // })
      }

    render() {
        return (
            <div>
                <Login handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} handleLoginSubmit={this.handleLoginSubmit} />
                <Signup handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} />
            </div>
        )
    }
}

export default UserContainer;
