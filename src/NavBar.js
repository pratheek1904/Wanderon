import React from 'react'
import {Link} from 'react-router-dom'
import "./App.css"

const NavBar = () => {
    const navstyle={
        color:'black'
    }

  return (
    <div className='nav-barr'>
      <nav>
        <h2>WanderOn</h2>
        <ul className='nav-links'>
           <Link style={navstyle} to='/'> <li>Home </li></Link>
           <Link style={navstyle} to='/Xmas'> <li>Xmas </li></Link>
           <Link style={navstyle} to='/IntlTrips'> <li>International  </li></Link>
           <Link style={navstyle} to='/Weekend'> <li>Weekend </li></Link>
           <Link style={navstyle} to='/Backpack'> <li>Backpacking  </li></Link>

        </ul>
      </nav>
    </div>
  )
}

export default NavBar
