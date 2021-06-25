// import React from 'react';
// import { connect } from 'react-redux';
// import User from './User';
// import { loginUser } from '../actions.js/users';

// class Login extends React.Component {

//   state = {
//     username: '',
//     password: '',
//     users: [],
//     currentUser: '',
//   }

//   handleUsernameChange = event => {
//     this.setState({
//       username: event.target.value
//     })
//   }

//   handlePasswordChange = event => {
//     this.setState({
//       password: event.target.value
//     })
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     // let formData = { username: this.state.username, password: this.state.password }
//     // console.log('hello', formData)
//     // fetch('http://localhost:4000/users')
//     // .then(res => res.json())
//     // .then(data =>{
//     //   console.log(data)
//     //   const currentUser = data.find(user => {
//     //     return user.username === formData.username;
//     //   })
//     //   console.log(currentUser)
//     //   if (currentUser) {
//     //     this.setState({
//     //       currentUser: currentUser
//     //     })
//     //   } else {
//     //     alert('wrong username or password');
//     //   }
//     // })
//     console.log(loginUser(this.state))
//     this.props.loginUser(this.state)
//     this.setState({
//       username: '',
//       password: ''
//     })
  
//     // fetch('http://localhost:4000/users', {
//     //   method: "POST",
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify(formData)
//     // })
//   }

//   render() {
//     return (
//       <form className='container' onSubmit={event => this.handleSubmit(event)}>
//         <h1>Login</h1>
//         <div>
//           <input type="text" name="username" placeholder="Username" onChange={event => this.handleUsernameChange(event)} value={this.state.username}/>
//           <label htmlFor="username"></label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" onChange={event => this.handlePasswordChange(event)} value={this.state.password}/>
//           <label htmlFor="password"></label>
//         </div>
//         <input type="submit" value="Login" />
//         <User username={this.props.currentUser.username} score={this.props.currentUser.score}/>

//       </form>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser
//   }
// }

 
// export default connect(mapStateToProps, { loginUser })(Login);

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
    console.log("form submit");
    //call login action and pass this.state.
    this.props.login(this.state)


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