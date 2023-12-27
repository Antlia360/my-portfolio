import React from "react";
// import resumePDF from "../resume/Aarati_Shah_CV.pdf  ";
import resumePDF from "../resume/Aarati_Shah_CV.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        <span>About</span> Me{" "}
      </h1>

      <div className="row">
        <div className="info">
          <h3>
            {" "}
            <span> Name : </span> Aarati Shah{" "}
          </h3>
          <h3>
            {" "}
            <span> Date of Birth : </span> 10th Oct, 2000{" "}
          </h3>
          <h3>
            {" "}
            <span> Qualification : </span> M.Tech, CSE{" "}
          </h3>
          <h3>
            {" "}
            <span> Status : </span> Student{" "}
          </h3>
          <h3>
            {" "}
            <span> Marital Status : </span> Unmarried{" "}
          </h3>
          <h3>
            {" "}
            <span> Language known : </span>English, Hindi, Bengali, Nepali,
            Sanskrit{" "}
          </h3>
          <a href={resumePDF} download="Aarati_Shah_Resume.pdf">
            <button className="btn">
              {" "}
              Download CV <i className="fas fa-download"></i>{" "}
            </button>
          </a>
        </div>

        <div className="counter">
          <div className="box">
            <span>Tech</span>
            <h4>Explorer</h4>
          </div>

          <div className="box">
            <span> ML</span>
            <h4>Enthusiast</h4>
          </div>

          <div className="box">
            <span>Animation </span>
            <h4>Photoshop</h4>
          </div>

          <div className="box">
            <span> Web</span>
            <h4>Dev</h4>
          </div>
          <div className="box">
            <span> Creative</span>
            <h4>Coder</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
