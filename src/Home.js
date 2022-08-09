import React from "react";
import image from './Wallpaper.jpg'


const Home = () => {
  return (
    <div className="homePage">
      <p>
        <section>
          <h3> <u>Pratheek G V</u></h3>
       Hello I'am Pratheek G V, I have completed my Graduation in  Bangalore Institute Of Technology, I have started my front end in Refactor academy from June 01
       <br></br>
          <a href="https://github.com/pratheek1904"
          target="_blank"  rel="noopener noreferrer">Github Link
           </a>
          
          </section>

      </p>

      <div className="image">
    
       <img src={image} alt="" height="400px" width="400px"/> 
      </div>


    </div>
  );
};

export default Home;
