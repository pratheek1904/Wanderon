import React from "react";
import "../App.css";
import styled from "styled-components";

const Footer = () => {


  return (
    <Wrapper className="Section">
      <div className="nav-bar">
        <nav>
        
          <ul className="nav-links">
  
             
              <li>
                <b><i className="fa-brands fa-instagram"></i>Instagram</b>
              </li>
        
      
           
              <li>
                <b><i className="fa-brands fa-facebook"></i>Facebook</b>
              </li>
         
        
              <li>
        <b><i className="fa-brands fa-linkedin"></i>LinkedIn</b>
              </li>
     
              
              <li>
               <b><i className="fa-brands fa-twitter"></i>Twitter</b>
              </li>
          
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border-radius: 1000px;
  margin: 10px 20px;
  left: 30px;
  padding: 0;
  margin:35px 20px 20px 30px;
 

  nav {
    display: flex;
    justify-content: space-around;
    /* background-color: lightgrey; */
    background-color: lightgoldenrodyellow;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }
b{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
b:hover{
  color:rosybrown
}

  .nav-links {
    display: flex;
    justify-content: space-around;
    width: 40%;
    list-style: none;
  }

`;

export default Footer;
