import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
// import TitleBar from "./TitleBar";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-content">
        <div id="hero">
          <div id="top-intro">
            hi! i'm claire. this will be my about me section.
          </div>
          <div className="hero-item">.</div>
        </div>
        <img src="https://i.imgur.com/eShSxkZ.jpg" alt="" id="headShot" />
      </div>
      <div className="proj-container">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
