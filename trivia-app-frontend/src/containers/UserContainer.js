import React, { Component } from 'react'

import Home from '../components/Home'
// import User from '../components/User'
import Login from '../components/Login'
import Signup from '../components/Signup'



class UserContainer extends Component {


    render() {
        return (
            <div>
                <Home />
                <Login />
                <Signup />
            </div>
        )
    }
}

export default UserContainer;
