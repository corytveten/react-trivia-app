import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/users'

const Logout = ({logout}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        logout()
    }
    
    return (
        <button onClick={handleSubmit}>Logout</button>
    )
}


export default connect(null, { logout })(Logout)