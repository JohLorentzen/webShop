import React from "react";
import AI from "../assets/womenTech.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AI})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Om oss </h1>
        <p>
          OM oss AI for alle er en nettside som tilbyr kurs i AI og maskinlæring
        </p>
      </div>
    </div>
  );
}

export default About;
