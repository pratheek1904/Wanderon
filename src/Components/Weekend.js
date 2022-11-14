import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";

const Weekend = () => {
  const { name, setname } = useState("");
  const { phone, setphone } = useState("");
  const { email, setemail } = useState("");
  
  const handleSubmit=()=>{
  
    alert("your details were submitted");
  }
  return (
    <Wraper className="section">
      <div className="box">
        <div className="form">
          <h1>Contact us</h1>
          <form>
            Your Name:
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e)=>setname(e.target.value)}
            />
            <br />
            <br />
            Your Number:
            <input
             type="number"
              placeholder="Enter your Number"
              value={phone}
              onChange={(e)=>setphone(e.target.value)} />
            <br />
            <br />
            Your Email:
            <input
             type="email" 
             placeholder="Your Email" 
              value={email}
              onChange={(e)=>setemail(e.target.value)}
             />
            <br />
            <br />
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Wraper>
  );
};
const Wraper = styled.section`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: lightblue;
  display: flexbox;
  flex-direction: row;

  .box {
    position: absolute;
    top: 30%;
    left: 35%;
    width: 400px;
    padding: 40px;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(17, 1, 1, 0.6);
    border-radius: 20px;
    background-color: lightblue;
  }
  form {
    margin-left: 25%;
  }
  h1 {
    text-align: center;
    padding: 10px;
    margin-top: 2px;
  }
  input {
    background-color: #e5e4ea;
    border-radius: 6px;
  }
  button {
    background-color: gray;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    align-items: center;
    margin-left: 25%;
  }
  button:hover {
    background-color: aquamarine;
  }
`;
export default Weekend;
