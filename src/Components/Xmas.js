import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Components/Comp.css";
import styled from "styled-components";


const Xmas = () => {

    const [users,setUsers]=useState([]);

    const getUsers=async()=>{
        const response=await fetch('https://api.npoint.io/f89acb9ee900ca95b8dc');
        setUsers(await response.json());
    }
    useEffect(()=>{
        getUsers();
    },[]);


  return (
    <div>
      <h1 className="heading">Xmas & New Year 2022</h1>
    <Wrapper className="section">
     {
      users.map((curElem)=>{
        const {id,name,title,featuredImage}=curElem;
        return(
          <div key={id} className="card">
          <div className="title">
          <h1>{title}</h1>
          </div>
          <figure>
            <img src={featuredImage.link} alt={name}/>
          </figure>
       
          <div className="card-data">
          <div className="desc">{featuredImage.caption}</div>
            <NavLink to={id}>
            <button className="btn">Read More</button>
            </NavLink>
          </div>
          </div>
        )
      })
     }
  
    </Wrapper>
    </div>
  );
};
const Wrapper=styled.section`
background-color: aliceblue;
width: 25%;
margin: 0px;
padding: 0px;
display: flex;

.container{
  max-width:120rem;
}
figure{
  display:flex;
  height:250px;
  width:100%;
}
.title{
  left: 10;
  font-size: 10px;
  text-align: center;
}
.desc{
  text-align: center;
  align-items: center;
}
.btn{
  align-items: center;
  left: 10px;
  margin-left: 100px;
}
`;

export default Xmas;
