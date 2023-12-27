import React from "react";
import aaratiImage from "../images/aarati.jpeg";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="user">
        <img src={aaratiImage} alt="Aarati Shah" />
        <h3 className="name">Aarati Shah</h3>
        <p className="post">IIT Kgp Student</p>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#portfolio">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
