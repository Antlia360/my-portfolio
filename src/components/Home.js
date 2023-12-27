import React, { useState, useEffect } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopElement, setShowTopElement] = useState(false);

  //   const handleMenuClick = () => {
  //     setMenuOpen(!menuOpen);
  //   };

  const handleScroll = () => {
    setMenuOpen(false);

    // Check scroll position and update state
    setShowTopElement(window.scrollY > 0);
  };

  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="home" id="home">
      <h3>HI THERE !</h3>
      <h1>
        I'm <span>Aarati Shah</span>
      </h1>
      <p>
        Greetings! I'm Aarati Shah, currently in the midst of an exciting M.Tech
        journey at IIT Kharagpur. My passion lies in the intersection of
        technology and creativity. As a web developer, I enjoy crafting
        interactive websites. My curiosity extends to the realm of machine
        learning, where I delve into algorithms and create predictive models.
        Additionally, my creative side finds expression in animation and
        Photoshop artistry, where I bring stories to life through visual
        narratives.
        <br />
        Join me on this thrilling journey of exploration and learning in the
        ever-evolving worlds of tech and creativity.
      </p>
      <a href="#about" onClick={() => handleSmoothScroll("about")}>
        <button className="btn">
          About me <i className="fas fa-user"></i>
        </button>
      </a>

      {/* //   {showTopElement && ( */}
      {/* <div className="top"> */}
      {/* Your content for the top element */}
      {/* <img src="images/scroll-top-img.png" alt="" /> */}
      {/* </div> */}
      {/* )} */}
    </section>
  );
};

export default Home;
