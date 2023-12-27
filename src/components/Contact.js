import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {" "}
        <span>Contact</span> Me{" "}
      </h1>

      <div className="row">
        <div className="content">
          <p className="title">
            Let's connect and share ideas! You can find me on LinkedIn, GitHub
            or shoot me an email at aaratishah10@gmail.com. Cheers!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="content">
          {/* <h3 className="title">contact info</h3> */}
          <div className="info">
            <h4>
              {" "}
              <i className="fas fa-envelope"></i> aaratishah10@gmail.com{" "}
            </h4>
            <h4>
              {" "}
              <i className="fas fa-phone"></i> +91 9166356094{" "}
            </h4>
            <h4>
              {" "}
              <i className="fab fa-linkedin-in"></i>{" "}
              <a
                href="https://www.linkedin.com/in/aarati-shah-a49430191/"
                className="white-text"
              >
                LinkedIn
              </a>{" "}
            </h4>
            <h4>
              {" "}
              <i className="fab fa-github"></i>{" "}
              <a href="https://github.com/Antlia360" className="white-text">
                GitHub
              </a>{" "}
            </h4>
            <h4>
              {" "}
              <i className="fas fa-map-marker-alt"></i>Kalyanpur Housing Estate,
              Asansol-713305{" "}
            </h4>
          </div>
        </div>

        <form action="">
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="box message"
            placeholder="message"
          ></textarea>
          <button type="submit" className="btn">
            {" "}
            send <i className="fas fa-paper-plane"></i>{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
