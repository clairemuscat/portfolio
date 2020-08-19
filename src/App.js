import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-content">
        <div id="hero">
          <div id="top-intro">Hi! I'm Claire.</div>
          <p className="hero-item">
            I'm a full stack web developer with a passion for puzzles of any
            kind. In my spare time you can find me either constructing
            crosswords or mixing up a too-complicated cocktail.
          </p>
        </div>
        <div id="headShot">
          <img src="https://i.imgur.com/eShSxkZ.jpg" alt="" />
        </div>
      </div>
      <div className="proj-container">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
