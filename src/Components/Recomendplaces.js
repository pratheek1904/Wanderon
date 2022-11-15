import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recomendplaces = () => {
  const { id } = useParams();
  // const {name}=props
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://api.npoint.io/f89acb9ee900ca95b8dc");
      const data = await response.json();
      setUsers(data.filter((ele) => ele.id == id)[0].tags);
    };
    getUsers();
  }, []);
  return (
    <Section id="recommend">
      <div className="title">
        <h2 className="recomnd">Recommend places</h2>
      </div>
      <div className="destinations">
        {users.map((elem) => {
          return (
            <div key={elem.id} className="destination">
              <div className="destination2"> {elem.name}</div>
              <div>{elem.slug}</div>
              <div className="info"></div>
              <div className="distance">
                {/* <span>{featuredImage.caption}</span> */}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: whitesmoke;
  padding: 0;
  margin: 0;
  .title {
    text-align: center;
  }
  .date {
    border-radius: 8px;
    padding: 5px;
    margin-left: 180px;
    font-size: 10px;
  }

  button {
    background-color: aquamarine;
    border-radius: 80px;
    padding: 10px;
    border-bottom-right-radius: 10px;
  }
  button:hover {
    background-color: #8338ec;
  }
  .destination2 {
    /* color:darkgreen; */
    color: blue;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    margin-top: 10px;
    .destination {
      padding: 1rem;
      display: flex;
      margin-top: 15px;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

export default Recomendplaces;
