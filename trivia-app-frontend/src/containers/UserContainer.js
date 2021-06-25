import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions.js/users';

import Home from '../components/Home'
import User from '../components/User'
import Login from '../components/Login'
import Signup from '../components/Signup'



class UserContainer extends Component {

    // state = {
    //     username: '',
    //     password: ''
    //   }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      console.log(this.props.users)
      return <User />
    }
  }

    // handleUsernameChange = event => {
    //     this.setState({
    //       username: event.target.value
    //     })
    //   }
    
    // handlePasswordChange = event => {
    //     this.setState({
    //       password: event.target.value
    //     })
    //   }

    // handleLoginSubmit = event => {
    //     event.preventDefault()
    //     let formData = { username: this.state.username, password: this.state.password }
    //     console.log(formData)
    //     fetch('http://localhost:4000/users')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     // fetch('http://localhost:4000/users', {
    //     //   method: "POST",
    //     //   headers: {
    //     //     'Content-Type': 'application/json'
    //     //   },
    //     //   body: JSON.stringify(formData)
    //     // })
    //   }

    render() {
        return (
            <div>
                {/* <Login handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} handleLoginSubmit={this.handleLoginSubmit} />
                <Signup handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} /> */}
                <Login />
                {/* <Signup /> */}
                <p>User: {this.handleLoading}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    users: state.UsersReducer,
    loading: state.UsersReducer.loading
  }
}

export default connect(mapStateToProps, { fetchUsers })(UserContainer);
