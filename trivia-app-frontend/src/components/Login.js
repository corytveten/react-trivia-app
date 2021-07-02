

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/users'

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = (event) => {
   this.setState({
      username: event.target.value
   })
  }

  handlePasswordChange = (event) => {
    this.setState({
       password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("form submit");
    //call login action and pass this.state.
    this.props.login(this.state, this.props.history)


    this.setState({
      username: '',
      password: ''
    })
  }

  render() {


    return (
      <form id='login-form' className='container' onSubmit={this.handleSubmit}>
        <h1>Log in:</h1>
        <input type="text" name='username' placeholder='username' value={this.state.username} onChange={this.handleUsernameChange}/>
        <input type="password" name='password' placeholder='password' value={this.state.password} onChange={this.handlePasswordChange}/>
        <button type='submit' >Login</button>
      </form>
    )
  }

}

export default connect(null, { login })(LoginForm);

