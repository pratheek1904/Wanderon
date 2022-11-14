import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="section">
      <>
        <nav>
          <div><h1>WanderOn</h1>
            <ul>
              <li>Home</li>
              <li>Search</li>
              <li>Login</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </>
    </Wrapper>
  );
};
const Wrapper = styled.section`


`;

export default Footer;
