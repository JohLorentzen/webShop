import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/heroimage.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> AI for alle</h1>
        <p> Lær å mestre bruken av AI og effektiviser din hverdag!</p>
        <Link to="/menu">
          <button> MELD DEG PÅ </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;