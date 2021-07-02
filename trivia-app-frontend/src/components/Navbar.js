import React from 'react'
import { NavLink } from 'react-router-dom';
 
 
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          className='link-btn'
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/questions"
          exact
          className='link-btn'
          activeStyle={{
            background: 'darkblue'
          }}
        >Questions</NavLink>
        <NavLink
          to="/login"
          exact
          className='link-btn'
          activeStyle={{
            background: 'darkblue'
          }}
        >Log in</NavLink>
        <NavLink
          to="/signup"
          exact
          className='link-btn'
          activeStyle={{
            background: 'darkblue'
          }}
        >Sign up</NavLink>
        <NavLink
          to="/user"
          exact
          className='link-btn'
          activeStyle={{
            background: 'darkblue'
          }}
        >User Page</NavLink>
      </div>
    )
  }
}
 
export default Navbar;

// const link = {
  //   width: '100px',
  //   padding: '12px',
  //   margin: '0 6px 6px',
  //   background: 'blue',
  //   textDecoration: 'none',
  //   color: 'white',
  //   borderRadius: '25px',
  // }