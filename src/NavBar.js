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
           {/* <Link style={navstyle} to='/Xmas'> <li><b>Places</b> </li></Link> */}
           <Link style={navstyle} to='/Search'> <li><b>Search</b> </li></Link>
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
margin: 0;
padding: 0;
margin-left: 30px;
margin-right: 20px;

nav{
  display: flex;
  justify-content: space-around;
  background-color: aquamarine;
}

.nav-links{
  display: flex;
  justify-content: space-around;
  width:40%;
  list-style: none;
}
`

export default NavBar
