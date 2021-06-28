import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  borderRadius: '25px',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/questions"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Questions</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Log in</NavLink>
        <NavLink
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Sign up</NavLink>
        <NavLink
          to="/user"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >User Page</NavLink>
      </div>
    )
  }
}
 
export default Navbar;