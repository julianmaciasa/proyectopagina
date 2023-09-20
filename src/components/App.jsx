import React, { useState } from "react";
//import "./App.css";


const Colors = ["pink", "green", "blue", "black", "purple", 9*8];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(Colors[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {Colors.map((color) => (
        <button
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;

