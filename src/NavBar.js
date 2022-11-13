import React from 'react'
import {Link} from 'react-router-dom'
import "./App.css"
import styled from 'styled-components'


const NavBar = () => {
    const navstyle={
        color:'orange'
    }

  return (
    <Wrapper className='Section'>
       <div className='nav-bar'>
      <nav>
        <h2>WanderOn</h2>
        <ul className='nav-links'>
           <Link style={navstyle} to='/'> <li><b>Home</b> </li></Link>
           <Link style={navstyle} to='/Xmas'> <li><b>Places</b> </li></Link>
           <Link style={navstyle} to='/Login'> <li><b>Login</b>  </li></Link>
           <Link style={navstyle} to='/Weekend'> <li><b>Contact</b> </li></Link>
        </ul>
      </nav>
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
border-radius:1000px;
margin: 10px   20px;
left: 30px;
margin-top: 5px;
/* position:fixed */
`

export default NavBar
