import React from 'react';
 
import User from './User';

class Login extends React.Component {

  // state = {
  //   username: '',
  //   password: '',
  //   currentUser: '',
  // }

  // handleUsernameChange = event => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  // handlePasswordChange = event => {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { username: this.state.username, password: this.state.password }
  //   console.log('hello', formData)
  //   fetch('http://localhost:4000/users')
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data)
  //     const currentUser = data.find(user => {
  //       return user.username === formData.username;
  //     })
  //     console.log(currentUser)
  //     if (currentUser) {
  //       this.setState({
  //         currentUser: currentUser
  //       })
  //     } else {
  //       alert('wrong username or password');
  //     }
  //   })
  //   this.setState({
  //     username: '',
  //     password: ''
  //   })

  // }

  render() {
    return (
      <form className='container' onSubmit={event => this.handleSubmit(event)}>
        <h1>Login</h1>
        <div>
          <input type="text" name="username" placeholder="Username" onChange={event => this.props.handleUsernameChange(event)} value={this.props.username}/>
          <label htmlFor="username"></label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" onChange={event => this.props.handlePasswordChange(event)} value={this.props.password}/>
          <label htmlFor="password"></label>
        </div>
        <input type="submit" value="Login" />
        {!this.props.username ? null : <User username={this.props.currentUser.username} score={this.props.currentUser.score}/>}
      </form>
    );
  }
}
 
export default Login;