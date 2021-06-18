import React from 'react';
 
import User from './User';

class Login extends React.Component {

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

  handleSubmit = event => {
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
      this.setState({
        currentUser: currentUser
      })
    })
    this.setState({
      username: '',
      password: ''
    })
  
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
      <form className='container' onSubmit={event => this.handleSubmit(event)}>
        <h1>Login</h1>
        <div>
          <input type="text" name="username" placeholder="Username" onChange={event => this.handleUsernameChange(event)} value={this.state.username}/>
          <label htmlFor="username"></label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" onChange={event => this.handlePasswordChange(event)} value={this.state.password}/>
          <label htmlFor="password"></label>
        </div>
        <input type="submit" value="Login" />
        <User username={this.state.currentUser.username} score={this.state.currentUser.score}/>

      </form>
    );
  }
}
 
export default Login;