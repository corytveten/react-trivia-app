import React from 'react';
 
class Signup extends React.Component {
  // state = {
  //   username: '',
  //   password: ''
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

  handleSubmit = event => {
    event.preventDefault()
    let formData = { username: this.state.username, password: this.state.password }
    console.log(formData)
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
          <input type="text" name="username" placeholder="Username" onChange={event => this.props.handleUsernameChange(event)} value={this.props.username}/>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" onChange={event => this.props.handlePasswordChange(event)} value={this.props.password}/>
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}
 
export default Signup;