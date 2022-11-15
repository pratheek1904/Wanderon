import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [myemail, setmyemail] = useState("");
  const [mypassword, setmypassword] = useState("");

  const [myarray, setmyarray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
  if(myemail&&mypassword){
    const newentry = {
      id: new Date().getTime().toString(),
      myemail,
      mypassword,
    };
    setmyarray([...myarray, newentry]);
  }
  else{
    alert("Enter the input first")
  }
   setmyemail("")
   setmypassword("")
  };
const handleRemove=(id)=>{
  const removed=myarray.filter((elem)=>{
    return elem.id!==id
  })
  alert('would you like to logout')
  setmyarray(removed)
}
  return (
    <div className="login">
     <Wrapper className="section">
     <h1 className="topic">Login Form</h1>
      <form onSubmit={handleSubmit}>
     {/* <label> Enter The Email</label>:<br/> */}
        <input
          type="text"
          placeholder="Enter the Email"
          value={myemail}
          onChange={(e) => {
          setmyemail(e.target.value);
          }}
        /><br/>
        <br />
        {/* Enter The Text:<br/> */}
        <input
          type="password"
          placeholder="Enter the Password"
          value={mypassword}
          onChange={(e) => setmypassword(e.target.value)}
        />
        <br /><br></br>
        <button>Login</button>
      </form>
    
  
    <div className="login">
    {
        myarray.map((elem) => {
        return (
        <>
        <h1>Your Login Credentials</h1>
        <div key={elem.id} >
            <h3>email:{elem.myemail}</h3> 
            <p>password:{elem.mypassword}</p>
        <NavLink to='/Home'><button onClick={()=>handleRemove(elem.id)}>Logout</button></NavLink>
          </div>
       </>
        );
      })}
    </div>
    </Wrapper>
    </div>
  );
};
const Wrapper=styled.section`

margin: 40px;
padding: 10px;
bottom: 10px;
text-align: center;
align-items: center;
height: 10;
width: 100%;
justify-content: space-around;
background-color: lightgrey;
position: absolute;
top:50px;
bottom: 120px;
left:35%;
width:400px;
padding:40px;
box-sizing: border-box;
box-shadow: 0 15px 25px rgba(17, 1, 1, 0.6);
border-radius: 10px;
button{
    background-color:lightskyblue ;
    padding:5px;
    border-radius: 10px;
}
button:hover{
    background-color: lightgoldenrodyellow;
}
.topic{
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
}
`;

export default Login;
