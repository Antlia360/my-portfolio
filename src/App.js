// App.js
import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./components/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Education />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
