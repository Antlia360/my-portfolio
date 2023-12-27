import React from "react";

const Project = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        {" "}
        My <span>Project</span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="images/img1.jpg" alt="" />
        </div>
        <div className="box">
          <img src="images/img2.jpg" alt="" />
        </div>
        <div className="box">
          <img src="images/img3.jpg" alt="" />
        </div>
        <div className="box">
          <img src="images/img4.jpg" alt="" />
        </div>
        <div className="box">
          <img src="images/img5.jpg" alt="" />
        </div>
        <div className="box">
          <img src="images/img6.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
