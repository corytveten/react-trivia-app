import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/users'

const Logout = ({logout, history}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        logout(history)
    }
    
    return (
        <button className='link-btn' onClick={handleSubmit}>Logout</button>
    )
}


export default connect(null, { logout })(Logout)