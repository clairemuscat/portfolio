import React from "react";
import "./App.css";
let imageUrl = "./src/background-image-plants.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        <h1>
          Hi! I'm Claire. Software developer, crossword constructor and cocktail
          enthusiast. It's nice to meet you!
        </h1>
      </div>
    </div>
  );
}

export default App;
