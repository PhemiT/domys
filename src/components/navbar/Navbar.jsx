import React from 'react'
import './navbar.css'
import { RiHomeHeartFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='navbar container'>
      <div className="navbar__main">
        <div className="logo">
          <RiHomeHeartFill className='logo__icon'/>
          <h3>DOMYS</h3>
        </div>
        <div className='divide__line'></div>
        <div className="navbar__links">
          <a href="#property">Properties</a>
          <a href="#listing">Listings</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div className="navbar__sign">
        <a href="#get-started">Sign Up</a>
        <a href="#sth" className='sign-btn'>Sign In</a>
      </div>
    </div>
  )
}

export default Navbar