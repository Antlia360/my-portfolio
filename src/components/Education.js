import React from "react";

const Education = () => {
  return (
    <section class="education" id="education">
      <h1 class="heading">
        {" "}
        My <span>Education</span>{" "}
      </h1>

      <div class="box-container">
        <div class="box">
          <i class="fas fa-graduation-cap"></i>
          <span>2023-25</span>
          <h3>M. Tech, CSE</h3>
          <p>
            CGPA : 7.33 (Scale : 10)
            <br /> IIT Kharagpur, Kharagpur
            <br />
            Indian Institute of Technology
          </p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap"></i>
          <span>2019-23</span>
          <h3>B. Tech, CSE</h3>
          <p>
            CGPA : 9.1 (Scale : 10)
            <br /> Kalyani Government Engineering College, Kalyani
            <br />
            University : MAKAUT
          </p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap"></i>
          <span>2018</span>
          <h3>Class XII</h3>
          <p>
            Percentage : 82.4
            <br /> D.A.V. Public School, Asansol
            <br />
            Board : CBSE
          </p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap"></i>
          <span>2016</span>
          <h3>Class X</h3>
          <p>
            CGPA : 10 (Scale : 10)
            <br /> D.A.V. Public School, Asansol
            <br />
            Board : CBSE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
