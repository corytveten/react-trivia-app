import React from 'react';
 
class Signup extends React.Component {
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

  handleSubmit = event => {
    event.preventDefault()
    let formData = { username: this.state.username, password: this.state.password, score: 0 }
    console.log(formData)
    fetch('http://localhost:4000/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
  }

  render() {
    return (
      <form className='container' onSubmit={event => this.handleSubmit(event)}>
        <h1>Create an Account</h1>
        <div>
          <input type="text" name="username" placeholder="Username" onChange={event => this.handleUsernameChange(event)} value={this.state.username}/>
          <label htmlFor="username"></label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" onChange={event => this.handlePasswordChange(event)} value={this.state.password}/>
          <label htmlFor="password"></label>
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}
 
export default Signup;