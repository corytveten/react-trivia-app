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
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
      users: state.users
  }
}


 
export default connect(mapStateToProps, { addUser })(Signup);

