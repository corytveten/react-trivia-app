import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import Home from '../components/Home';
// import User from '../components/User'
import Login from '../components/Login';
import Signup from '../components/Signup';



class UserContainer extends Component {

    state = {
        username: '',
        password: '',
        currentUser: '',
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
      console.log('hello', formData)
      fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        const currentUser = data.find(user => {
          return user.username === formData.username;
        })
        console.log(currentUser)
        if (currentUser) {
          this.setState({
            currentUser: currentUser
          })
        } else {
          alert('wrong username or password');
        }
      })
      this.setState({
        username: '',
        password: ''
      })
    }

    render() {
        return (
            <div>
                <Login handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} handleLoginSubmit={this.handleLoginSubmit} username={this.state.username} password={this.state.password}/>
                <Signup handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} />
            </div>
        )
    }
}

export default UserContainer;
