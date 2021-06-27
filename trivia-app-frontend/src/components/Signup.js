import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/users';
 
class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    // currentUser: '',
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
  //   let formData = { username: this.state.username, password: this.state.password, score: 0 }
  //   console.log(formData)
  //   fetch('http://localhost:4000/users', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     const currentUser = data; 
  //     if (currentUser) {
  //       this.setState({
  //         currentUser: currentUser
  //       })
  //     }
  //   })
  //   .catch(error => {
  //     alert("Username exists. Choose another.")
  //     console.log(error.message);
  //   })
      this.props.addUser(this.state, this.props.history)
      this.setState({
        username: '',
        password: '',
      })
   }

  render() {
    console.log(this.props.users)
    return (
      <div>
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
        <input type="submit" value="Create Account" />
      </form>
      {/* {this.props.map((user, index) => {
        // <User user={user} key={index} />
        <User />
      })} */}
      {/* <User username={this.props.username} score={this.props.currentUser.score}/> */}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
      users: state.users
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: formData => dispatch({ type: 'ADD_USER', payload: formData })
//   };
// };
 
export default connect(mapStateToProps, { addUser })(Signup);