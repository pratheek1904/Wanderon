import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

class NavBar extends Component {
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }

  render(){
 return (
    <Wrapper className="Section">
      <div className="nav-bar">
        <nav>
          <h2> WanderOn</h2>
          <ul className="nav-links">
            <Link className="navStyle"to="/">
              
              <li>
                <b>Home</b>
              </li>
            </Link>
            {/* <Link style={navstyle} to='/Xmas'> <li><b>Places</b> </li></Link> */}
            <Link className="navStyle" to="/Search">
                      <li>
                <b>Search</b>
              </li>
            </Link>
            <Link className="navStyle" to="/Login">
             
              <li>
                <b>Login</b>
              </li>
            </Link>
            <Link className="navStyle" to="/Contact">
           
              <li>
                <b>Contact</b>
              </li>
            </Link>
          </ul>
          <div className="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
}
}
const Wrapper = styled.section`
  border-radius: 1000px;
  margin: 10px 20px;
  left: 30px;
  margin-top: 5px;
  margin: 0;
  padding: 0;
  margin-left: 30px;
  margin-right: 20px;
b:hover{
color:lightseagreen;
}
  nav {
    display: flex;
    justify-content: space-around;
    /* background-color: lightgoldenrodyellow; */
    background-color: lightgray;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 2px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
  }
  .navStyle{
    color: green;;
  }
  h2{
  font-family :'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
  }

  .nav-links {
    display: flex;
    justify-content: space-around;
    width: 40%;
    list-style: none;
  }
.mobile{
color: royalblue;
display: none;
}
@media screen and (max-width:769px)  {
  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 40%;
    list-style: none;
    position: fixed;
    top:90px;
    right:0px;
    width: 300px;
    height:100vh;
    background-color: whitesmoke;
    box-shadow: 0 40px 60px rgba(0,0,0,0.1);
    padding: 40px 0 0 10px;
  }
  .nav-links li{
    margin-bottom: 25px;
  }
  .mobile{
    display: block;
    font-size:24px;
    cursor: pointer;
  }
}
`;

export default NavBar;
