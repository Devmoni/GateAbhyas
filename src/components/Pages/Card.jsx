import React from "react";
import Navbar from "../NavBar";
import Footer from '../Footer';
import {useNavigate} from 'react-router-dom';

function Card() {

  const navigate=useNavigate();

  function handleClick(){
    navigate("/NextPage")
  }

  return (
    <div className="wrapper">
    <Navbar/>
        <div className="container">
      <div className="card" onClick={handleClick}>
        <h4>Computer Science and Engineering</h4>
      </div>
      <div className="card" onClick={handleClick}>
        <h4>Electronics and Communication Engineering</h4>
      </div>
      <div className="card" onClick={handleClick}>
      <h4>Electrical Engineering</h4>
      </div>
      <div className="card" onClick={handleClick}>
      <h4>Mechanical Engineering</h4>
      </div>
      <div className="card" onClick={handleClick}>
      <h4>Civil Engineering</h4>
      </div>
      <div className="card" onClick={handleClick}>
      <h4>Chemical Engineering</h4>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default Card;
