import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const navstyle={
        color:'black'
    }

  return (
    <div>
      <nav>
        <h2>Pratheek G V</h2>
        <ul className='nav-links'>
           <Link style={navstyle} to='/'> <li>Home </li></Link>
           <Link style={navstyle} to='/About'> <li>About us </li></Link>
           <Link style={navstyle} to='Project'> <li>Projects </li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
